
const express = require('express')

const passport=require("passport")
const db = require('./data/db')
require('dotenv').config()

const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')
 
const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
    cors: {
        
        origin: "*",
        methods: [ "GET", "POST" ]
    }
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(cors());
                
//database config
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
                
                
const PORT = process.env.PORT || 3000;
let roomID='';


io.on("connection", (socket) => {
    socket.emit("me", socket.id);
    
    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
    });
    
    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUser", { signal: signalData, from, name });
    });
    
    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    });


    

    socket.on('join-room',(roomId,userId)=>{
        socket.join(roomId);
        
        io.to(roomId).broadcast.emit('user-connected');
        socket.on('disconnect',()=>{
            io.to(roomId).broadcast.emit('user-disconnected',userId);
        })
    })
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/trial.html'));
})

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