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

router.post('/doctor',DoctorCtrl.createDoctor);
router.put('/doctor/:id',DoctorCtrl.updateDoctor);
router.get('/docotrs',DoctorCtrl.getDoctors);
module.exports=router