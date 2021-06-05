import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';


const SocketContext = createContext();

const socket = io('http://localhost:3000');


const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [roomID,setRoomID]=useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });
     const peer=new Peer({initiator:false,trickle:false,stream});
    // socket.on('me', (id) => setMe(id));
    socket.emit('roomId',roomID);
    peer.on('call',call=>{
      call.answer(stream)
      userVideo.current.srcObject=stream;     
    })
    socket.on('user-connected',userId=>{
        const call=peer.call(userId,stream);
        userVideo.current.srcObject=stream;
        call.on('close',()=>{
          connectionRef.current.destroy();
        })

    })
    
    // socket.on('callUser', ({ from, name: callerName, signal }) => {
      //   setCall({ isReceivingCall: true, from, name: callerName, signal });
      // });
      
      
      peer.on('open',id=>{
        socket.emit('join-room',roomID,id)
      })
    connectionRef.current=peer;
  }, [roomID,stream]);




  




  // const answerCall = () => {
  //   setCallAccepted(true);

  //   const peer = new Peer({ initiator: false, trickle: false, stream });

  //   peer.on('signal', (data) => {
  //     socket.emit('answerCall', { signal: data, to: call.from });
  //   });

  //   peer.on('stream', (currentStream) => {
  //     userVideo.current.srcObject = currentStream;
  //   });

  //   peer.signal(call.signal);

  //   connectionRef.current = peer;
  // };

  // const callUser = (id) => {
  //   const peer = new Peer({ initiator: true, trickle: false, stream });

  //   peer.on('signal', (data) => {
  //     socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
  //   });

  //   peer.on('stream', (currentStream) => {
  //     userVideo.current.srcObject = currentStream;
  //   });

  //   socket.on('callAccepted', (signal) => {
  //     setCallAccepted(true);

  //     peer.signal(signal);
  //   });

  //   connectionRef.current = peer;
  // };

  // const leaveCall = () => {
  //   setCallEnded(true);

  //   connectionRef.current.destroy();

  //   window.location.reload();
  // };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      // callUser,
      // leaveCall,
      // answerCall,
      roomID,
      setRoomID
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };