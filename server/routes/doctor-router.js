const express=require('express')
const DoctorCtrl=require('../controller/doctor-controller')
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

// router.post('/student',StudentCtrl.createStudnet);
router.put('/doctor/:id',DoctorCtrl.updateDoctor);
router.put('/addCourse/:id',DoctorCtrl.addCourse);
router.get('/getdoctor/:email',DoctorCtrl.getDoctor);
router.post('/registerdoctor',DoctorCtrl.registerDoctor)
router.post('/logindoctor',DoctorCtrl.loginDoctor);
//router.get('/docotrs/:id',DoctorCtrl.getDoctorbyid)
module.exports=router