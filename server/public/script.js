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
let form=new FormData();
const studentId=Math.floor(Math.random() * 1000) + 1;
console.log("student: "+studentId);

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream)
  
  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    video.id='myvideo'
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })  })
    socket.on('user-connected', userId => {
    connectToNewUser(userId, stream)
  })
})
var azhryCounter=0;
function AzhryZoz(){
  azhryCounter++;

  console.log("Azhry Counter"+azhryCounter)
  img.onload=()=>{
    context.drawImage(myVideo,0,0,540,380)
    var student={
      url:canvas.toDataURL(),
      id:studentId
    }
    console.log(student)
    $.ajax({
      url:'http://localhost:5000/maskImage',
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
      success: function(){
          console.log("success")
  }
    })
  };
  img.src=dataUrl;
  
  
  
  
}

setInterval(AzhryZoz,60000);

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})


  


function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })

  
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}

