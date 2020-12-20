const Student= require('../models/student-model')
var multer=require('multer')

createStudnet= (req,res) => {
    const body=req.body
    if(!body)
    {
        return res.status(400).json({
            success:false,
            error:'You must provide a student'
        })
    }
    const student = new Student(body)
    if(!student)
    {
        return res.status(400).json({
            success:false,
            error:'err'
        })
    }
    student.save().then(()=>{
        return res.status(201).json({
            success:true,
            id:student._id,
            message:'Student created',
        })
    })
    .catch(error=>{
        return res.status(400).json({
            error,
            message:"student not created"
        })
    })   
}
updateStudent=async(req,res)=>{
    const body=req.body
    if(!body)
    {
        return res.status(400).json({success:false,message:'you must provide a body to update'})
    }
    Student.findOne({ _id: req.params.id},(err,student)=>{
        if(err)
        {
            return res.status(404).json({success:false,error:err})
        }
    
    student.username=body.username
    student.password=body.password
    student.acadId=body.acadId
    student.email=body.email
    student.course.push(body.course)
   // student.photo=body.photo

    student.save().then(()=>{
        return res.status(200).json({
            success:true,
            id:student._id,
            message:'Student Updated',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message:'Student not updated!',
        })
    })
    })
    
}
getStudents=async(req,res)=>{
    await Student.find({},(err,students)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!students.length){
            return res.status(404).json({success:false,error:'Students not found'})
        }
        return res.status(200).json({success:true,data:students})
    })
    .populate('course')
    .exec()
    .catch(err => console.log(err))
}
module.exports={
    getStudents,
    updateStudent,
    createStudnet
}
