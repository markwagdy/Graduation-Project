const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const myPeer = new Peer(undefined)
const myVideo = document.createElement('video')
myVideo.muted = true

var img=new Image()
let canvas=document.querySelector('#canvas')
let context=canvas.getContext("2d");
var dataUrl=canvas.toDataURL("image/png");
var xht=new XMLHttpRequest()
let studentSocketId;
let studentSocketsInRoom=[];
let StudentCurrentEmotions={};
var arr;
const peers = {}


navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  console.log("DR:  "+DR)
  var mydocs=document.createElement('div');
  mydocs.setAttribute('name',studentSocketId);
  addVideoStream(myVideo, stream,mydocs)
  myVideo.id=studentSocketId;

  
  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    const docs=document.createElement('div')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream,docs)
    })  })
    socket.on('user-connected', userId => {
      connectToNewUser(userId, stream)
      ,
      studentSocketsInRoom.push(userId)
    
    
  })
  
})



function AzFun(){
  img.onload=()=>{
    context.drawImage(myVideo,0,0,640,480)
    var student={
      url:canvas.toDataURL(),
      id:studentSocketId
    }
        
    $.ajax({
      url:'https://flask-emotion-service.herokuapp.com/getEmotion',
      type:'POST',
      data:JSON.stringify(student),
      dataType:'json',
      cache:false,
      processData:false,
      contentType:false,
      error: function(data){
            console.log("upload error" , data);
            console.log(data.getAllResponseHeaders());
          },
      success: function(response){
            StudentCurrentEmotions=response
            
            if(DR=="true"){
              ColorMap()
            }else{

            }
            }
    }
    
   
    )
  };
  img.src=dataUrl; 
  
}
setInterval(AzFun,20000);


socket.on('user-disconnected', userId => {
  const videoRemove=document.getElementById(userId);
 if(videoRemove.previousSibling!=null){
  var previous=videoRemove.previousSibling;
  if(previous) {
    previous.parentNode.removeChild(previous);

   }  }
  if (peers[userId]) peers[userId].close();
  if(studentSocketsInRoom[userId]) studentSocketsInRoom[userId].close() 
})

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id),
  studentSocketId=id,

  studentSocketsInRoom.push(studentSocketId)
 
})

function ColorMap()
{   
  
  arr=Object.entries(StudentCurrentEmotions);
  arr.forEach(element => {
    var texter=document.createElement('p')
      texter.classList.add("texter");
      var studentVideo=document.getElementById(String(element[0]))
    

      if(studentVideo!=null)
      {
       var previous=studentVideo.previousSibling;
        if(previous) {
          previous.parentNode.removeChild(previous);
      }
          
      if(texter==null)
      {
        
      }
      else{
        
        texter.innerHTML=String(element[1])
        studentVideo.parentElement.insertBefore(texter,studentVideo)
        }


      studentVideo.classList.remove("Happy")
      studentVideo.classList.remove("Sad")
      studentVideo.classList.remove("Neutral")
      studentVideo.classList.remove("no_face")
      studentVideo.classList.remove("Angry")
      studentVideo.classList.remove("confused")
      studentVideo.classList.remove("Surprise")
      studentVideo.classList.remove("Fear")
      
      
      
      studentVideo.classList.add(String(element[1]))
        
      
      
      
    }
  });
 }
  


function connectToNewUser(userId, stream ) {
  studentSocketsInRoom.push(userId)
  var docs=document.createElement('div')

  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  
  video.id=userId;
  docs.setAttribute('name',userId);
  
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream,docs)
  })
  call.on('close', () => {
    video.remove()
  })
  
  peers[userId] = call
}

function addVideoStream(video, stream,docs) {
  video.srcObject = stream
  
  video.addEventListener('loadedmetadata', () => {
    video.play()
    
  })
 

    docs.appendChild(video);
    videoGrid.appendChild(docs);
  
 
  
}

