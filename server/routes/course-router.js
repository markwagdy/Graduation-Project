const express=require('express')
const courseCtrl=require('../controller/course-controller')
const router=express.Router()
const {verify} = require('../_helpers/middleware')

router.post('/Course',verify,courseCtrl.createCourse)
router.put('/Course/:id',verify,courseCtrl.updateCourse)
router.get('/Courses',verify,courseCtrl.getCourses)

module.exports=router