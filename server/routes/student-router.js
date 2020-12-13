const express=require('express')
const StudentCtrl=require('../controller/student-controller')

const router=express.Router()

router.post('/student',StudentCtrl.createStudnet);
router.put('student/:id',StudentCtrl.updateStudent);
router.get('/students',StudentCtrl.getStudents);
module.exports=router