const express=require('express')
const StudentCtrl=require('../controller/student-controller')
var multer=require('multer')
const Student=require('../models/student-model')

const storage=multer({
    limits:{
        fileSize:2*1024*1024,
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|JPEG|png|JPG|PNG|jpeg)/))
        return cb(new Error('This is a not correct format of the file'))
        cb(undefined,true)
    }
})

const router=express.Router()



router.post('/:studentId/image',storage.single('image'),async(req,res)=>{
try{
    const {studentId}=req.params;
    const student=await Student.findById(studentId);
    const image=req.file.buffer ? req.file.buffer :'' ;
    student.image=image;
    await student.save().then(()=>{res.status(201).json(student)});
}
catch(Error){
console.log(Error);
}
})





// router.post('/student',StudentCtrl.createStudnet);
router.put('/student/:id',StudentCtrl.updateStudent);
router.get('/students',StudentCtrl.getStudents);
router.post('/registerstudent',StudentCtrl.reigsiterStudent)
router.post('/loginstudent',StudentCtrl.loginStudent);
router.get('/students/:id',StudentCtrl.getStudentById)

module.exports=router