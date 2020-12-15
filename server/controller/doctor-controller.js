const Doctor= require('../models/doctor-model')
var multer=require('multer')

createDoctor= (req,res) => {
    const body=req.body
    if(!body)
    {
        return res.status(400).json({
            success:false,
            error:'You must provide a doctor'
        })
    }
    const doctor = new Doctor(body)
    if(!doctor)
    {
        return res.status(400).json({
            success:false,
            error:'err'
        })
    }
    doctor.save().then(()=>{
        return res.status(201).json({
            success:true,
            id:doctor._id,
            message:'doctor created',
        })
    })
    .catch(error=>{
        return res.status(400).json({
            error,
            message:"doctor not created"
        })
    })   
}
updateDoctor=async(req,res)=>{
    const body=req.body
    if(!body)
    {
        return res.status(400).json({success:false,message:'you must provide a body to update'})
    }
    Doctor.findOne({ _id: req.params.id},(err,doctor)=>{
        if(err)
        {
            return res.status(404).json({success:false,error:err})
        }
    
    doctor.username=body.username
    doctor.password=body.password
    doctor.email=body.email
   // doctor.photo=body.photo

    doctor.save().then(()=>{
        return res.status(200).json({
            success:true,
            id:doctor._id,
            message:'doctor Updated',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message:'doctor not updated!',
        })
    })
    })
    
}
getDoctors=async(req,res)=>{
    await Doctor.find({},(err,doctors)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!docotrs.length){
            return res.status(404).json({success:false,error:'Doctor not found'})
        }
        return res.status(200).json({success:true,data:doctors})
    }).catch(err => console.log(err))
}
module.exports={
    getDoctors,
    updateDoctor,
    createDoctor
}
