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