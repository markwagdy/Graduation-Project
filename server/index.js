require('dotenv').config();//yes
const express = require("express");//yes
const https = require("https"); //yes
const app = express();//yes
var roomy;
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')

const passport=require("passport")
const db = require('./data/db')

const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')
 
const cors = require("cors");

var roomURL;

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
var dr;
app.get('/', (req, res) => {
  https.get('https://flask-emotion-service.herokuapp.com/getClear',()=>{
    console.log("cleared")
  })
  dr=true;
   roomy=uuidV4();
  res.redirect(`/${roomy}`)
})

app.get('/:room', (req, res) => {

  if(dr){
    res.render('room', { roomId: req.params.room ,doctor:dr})
    dr=false;
  }
  else
  {
    res.render('room', { roomId: req.params.room ,doctor:dr})
  }
  })

  app.get('/hi/URLID',(req,res)=> {
    if (roomy == null){
      
    }
    else{
      // res.data = roomy;
      console.log(roomy);
      res.status(200).json({
        sucess:true,
        data:roomy
      })
    }
  }
)

io.on('connection', socket => {
    
    socket.on('join-room', (roomId, userId) => {
      socket.join(roomId)
      socket.to(roomId).broadcast.emit('user-connected', userId)
  
      socket.on('disconnect', () => {
        socket.to(roomId).broadcast.emit('user-disconnected', userId)
      })
      socket.on('error', function(){
        socket.reconnect();
      });
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

server.listen(PORT,"0.0.0.0", () => console.log(`Server is running on port ${PORT}`));