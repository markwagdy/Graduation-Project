// import roomid from '../client/src/pages/CallPage/CallPage.Component.jsx';
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport=require("passport")
const db = require('./data/db')
require('dotenv').config()

// const cookieParser = require('cookie-parser')

//routers
const studentRouter=require('./routes/student-router')
const courseRouter=require('./routes/course-router')
const doctorRouter=require('./routes/doctor-router')
const meetingRouter=require('./routes/meeting-router')

const app = express()
const apiPort = 3000
const server=require('http').Server(app)
const io=require('socket.io')(server)
const {v4:uuidV4}=require('uuid')
const {ExpressPeerServer}=require('peer')
const peerServer=ExpressPeerServer(server,{debug:true});

// app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use('/peerjs',peerServer)


//passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

//database config
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// console.log(roomid);

app.use('/api',studentRouter)
app.use('/api',courseRouter)

app.use('/api',doctorRouter)
app.use('/api',meetingRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))