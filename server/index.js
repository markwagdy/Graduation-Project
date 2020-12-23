  
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport=require("passport")
const db = require('./data/db')


//routers
const studentRouter=require('./routes/student-router')
const courseRouter=require('./routes/course-router')
const doctorRouter=require('./routes/doctor-router')
const meetingRouter=require('./routes/meeting-router')





const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
//passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

//database config
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api',studentRouter)
app.use('/api',courseRouter)

app.use('/api',doctorRouter)
app.use('/api',meetingRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))