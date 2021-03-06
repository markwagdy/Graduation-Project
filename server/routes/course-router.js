const express=require('express')
const courseCtrl=require('../controller/course-controller')
const router=express.Router()
const {verify} = require('../_helpers/middleware')

router.post('/Course',courseCtrl.createCourse)
router.put('/Course/:id',courseCtrl.updateCourse)
router.get('/Courses',courseCtrl.getCourses)
router.get('/Course/:_id',courseCtrl.getCourse)
router.get('/getNotes/:_id',courseCtrl.getNotes)
router.put('/addMeeting/:id',courseCtrl.addmeeting);
router.put('/addNote/:id',courseCtrl.addnote);
router.get('/CourseByPin/:coursePin',courseCtrl.getCourseByPin)
module.exports=router