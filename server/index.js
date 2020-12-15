  
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./data/db')
const studentRouter=require('./routes/student-router')
const courseRouter=require('./routes/course-router')

const doctorRouter=require('./routes/doctor-router')


const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api',studentRouter)
app.use('/api',courseRouter)

app.use('/api',doctorRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))