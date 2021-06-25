require('dotenv').config();//yes
const express = require("express");//yes
const http = require("http"); //yes
const app = express();//yes

const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')

const passport=require("passport")
const db = require('./data/db')

const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')
 
const cors = require("cors");
const io = require("socket.io")(server, {
    cors: {
        
        origin: "*",
        methods: [ "GET", "POST" ]
    }
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(cors());
                
//database config
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
                
//port config
const PORT = process.env.PORT || 8000;
const {ExpressPeerServer}=require('peer')
const peerServer=ExpressPeerServer(server,{
  debug:true
});
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/peerjs',peerServer)
app.get('/', (req, res) => {
  res.redirect(`/${uuidV4()}`)
})
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
  })
io.on('connection', socket => {
    
    socket.on('join-room', (roomId, userId) => {
      socket.join(roomId)
      socket.to(roomId).broadcast.emit('user-connected', userId)
  
      socket.on('disconnect', () => {
        socket.to(roomId).broadcast.emit('user-disconnected', userId)
      })
     
    })
  })

// //socket part
// let lol=0;
// const users = {};

// const socketToRoom = {};

// io.on('connection', socket => {
//     console.log("connected "+socket.id);
//     socket.on("join room", roomID => {
//         console.log("connection established"); 
//         if (users[roomID]) {
//             const length = users[roomID].length;
//             if (length === 6) {
//                 socket.emit("room full");
//                 return;
//             }
//             users[roomID].push(socket.id);
//         } else {
//             users[roomID] = [socket.id];
//         }
//         socketToRoom[socket.id] = roomID;
//         const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

//         socket.emit("all users", usersInThisRoom);
//         console.log("all user event trigered");
//     });

//     socket.on("sending signal", payload => {
//         io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
//         console.log("sending event trigered");
//     });

//     socket.on("returning signal", payload => {
//         io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
//         console.log("returning event trigered");
//     });

//     socket.on('disconnect', () => {
//         const roomID = socketToRoom[socket.id];
//         let room = users[roomID];
//         if (room) {
//             room = room.filter(id => id !== socket.id);
//             users[roomID] = room;
//         }
//     });

// });
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname+'/trial.html'));
// })

// //routers
const studentRouter=require('./routes/student-router')
const courseRouter=require('./routes/course-router')
const meetingRouter=require('./routes/meeting-router')
const doctorRouter=require('./routes/doctor-router')
app.use('/api',studentRouter)
app.use('/api',courseRouter)
app.use('/api',doctorRouter)
app.use('/api',meetingRouter)

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));