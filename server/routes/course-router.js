const express=require('express')
const courseCtrl=require('../controller/course-controller')
const router=express.Router()

router.post('/Course',courseCtrl.createCourse)
router.put('/Course/:id',courseCtrl.updateCourse)
router.get('/Courses',courseCtrl.getCourses)

module.exports=router