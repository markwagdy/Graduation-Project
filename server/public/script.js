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
const studentId=Math.floor(Math.random() * 1000) + 1;
console.log("student: "+studentId);

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream)
  myVideo.id=studentSocketId;
  
  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })  })
    socket.on('user-connected', userId => {
      connectToNewUser(userId, stream)
    
    
  })
  var doctor=getUrlVars()['doctor']
})
function getUrlVars()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');

            if($.inArray(hash[0], vars)>-1)
            {
                vars[hash[0]]+=","+hash[1];
            }
            else
            {
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
        }

        return vars;
    }

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
          console.log(response)
  }
    })
  };
  img.src=dataUrl; 
}

setInterval(AzFun,20000);

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id),
  studentSocketId=id,
  console.log(studentSocketId);
})


  


function connectToNewUser(userId, stream ) {
  studentSocketsInRoom.push(userId)

  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream,userId)
  })
  call.on('close', () => {
    video.remove()
  })

  
}

function addVideoStream(video, stream,userId) {
  video.srcObject = stream
  video.id=userId
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  
  videoGrid.append(video)
}

