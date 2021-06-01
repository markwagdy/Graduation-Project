

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
//passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);
app.use(cors());
                
//database config
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
                
                
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Running');
});

io.on("connection", (socket) => {
    // socket.emit("me", socket.id);
    
    // socket.on("disconnect", () => {
    //     socket.broadcast.emit("callEnded")
    // });
    
    // socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    //     io.to(userToCall).emit("callUser", { signal: signalData, from, name });
    // });
    
    // socket.on("answerCall", (data) => {
    //     io.to(data.to).emit("callAccepted", data.signal)
    // });
    socket.on('join-room',(roomId,userId)=>{
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected',userId);
        socket.on('disconnect',()=>{
            socket.to(roomId).broadcast.emit('user-disconnected',userId);
        })
    })
});
//Get Room Id api
        

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