const express=require('express')
const StudentCtrl=require('../controller/student-controller')
var multer=require('multer')

var storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'../upload')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+'.png')
    }
})

const router=express.Router()

router.post('/student',StudentCtrl.createStudnet);
router.put('/student/:id',StudentCtrl.updateStudent);
router.get('/students',StudentCtrl.getStudents);
module.exports=router