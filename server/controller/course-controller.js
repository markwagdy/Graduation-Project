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
    course.student.push(body.student) //push el student gwa el array

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
getCourse=async(req,res)=>{

    const id = req.params._id;
    await Course.findOne({ _id:req.params._id},(err,course)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!course){
            return res.status(404).json({success:false,error:'course not found'})
        }
        return res.status(200).json({success:true,coursedata:course})
    }).catch(err => console.log(err))
}
getCourseByPin=async(req,res)=>{

    await Course.findOne({ coursePin:req.params.coursePin},(err,course)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!course){
            return res.status(404).json({success:false,error:'course not found'})
        }
        return res.status(200).json({success:true,coursedata:course})
    }).catch(err => console.log(err))
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
    })
    .populate('student') //ektb hena esm el attribute el 3yz t3mlo populate
    .exec()
    .catch(err => console.log(err))
}
module.exports={
    getCourses,
    updateCourse,
    getCourse,
    getCourseByPin,
    createCourse
}
