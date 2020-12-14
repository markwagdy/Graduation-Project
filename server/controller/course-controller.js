const { update } = require('../models/course-model')
const Course=require('../models/course-model')

createCourse=(req,res)=>{
    const body=req.body
    if(!body)
    {
       return res.status(400).json({
        success:false,
        error:'you must provide a course'
       })
    }
    const course=new Course(body)
    if(!course)
    {
        return res.status(400).json({
            success:false,
            err:'err'
        })
    }
    course.save().then(()=>{
        return res.status(201).json({
            success:true,
            id:course._id,
            message:'course Created'
        })
    }).catch(error=>{
        return res.status(400).json({
            error,
            message:'course not created'
        })
    })
}
updateCourse=async(req,res)=>{
    const body=req.body
    if(!body)
    {
        return res.status(400).json({success:false,message:'you must provide a body to update'})
    }
    Course.findOne({ _id: req.params.id},(err,course)=>{
        if(err)
        {
            return res.status(404).json({success:false,error:err})
        }
    
    course.courseId=body.courseId
    course.drEmail=body.drEmail
   

    course.save().then(()=>{
        return res.status(200).json({
            success:true,
            id:course._id,
            message:'Course Updated',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message:'Course not updated!',
        })
    })
    })
    
}
getCourses=async(req,res)=>{
    await Course.find({},(err,courses)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!courses.length){
            return res.status(404).json({success:false,error:'Courses not found'})
        }
        return res.status(200).json({success:true,data:courses})
    }).catch(err => console.log(err))
}
module.exports={
    getCourses,
    updateCourse,
    createCourse
}
