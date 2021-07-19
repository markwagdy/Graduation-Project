const Student= require('../models/student-model')
const Doctor= require('../models/doctor-model')

const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')
const ValidateReigsterInput=require('../validation/register');
const validateLoginInput=require('../validation/login');

const keys=require('../config/keys');



loginStudent=(req,res)=>{
const {errors,isValid} =validateLoginInput(req.body);


    // Check validation
    if (!isValid) {
         return res.status(400).json(errors);
    }

     const email = req.body.email;
     const password = req.body.password;

    // Find student by email
    Student.findOne({ email }).then(student => {
    // Check if student exists
    if (!student) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, student.password).then(isMatch => {
      if (isMatch) {
        
        // User matched
        // Create JWT Payload
        const payload = {
          id: student.id,
          name: student.name
        };
    // Sign token
    let accessToken = jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });


}






reigsiterStudent=(req,res)=>{
const {errors,isValid}=ValidateReigsterInput(req.body);


    if(!isValid){
        return res.status(400).json(errors);
    }
    Doctor.findOne({email:req.body.email}).then(doctor=>{
      if(doctor){
          return res.status(400).json({email:"Email already exists"});
      }
  else{

    Student.findOne({email:req.body.email}).then(student=>{
        if(student){
            return res.status(400).json({email:"Email already exists"});
        }else{
                const newstudent =new Student(req.body);

        
        //Hashing password in database
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newstudent.password,salt,(err,hash)=>{
                if (err) throw err;
                newstudent.password = hash;
                newstudent
                  .save()
                  .then(student => res.json(student))
                  .catch(err => console.log(err));
            })
        })
    }
    })
  }})

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
getStudent=async(req,res)=>{
  
  const email = req.params.email;
    await Student.findOne({email},(err,student)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!student){
            return res.status(404).json({success:false,error:'Students not found'})
        }
        return res.status(200).json({success:true,student:student})
    })
    .populate('course')
    .exec()
    .catch(err => console.log(err))
}
addCourse=async(req,res)=>{
  const body=req.body
  if(!body)
  {
      return res.status(400).json({success:false,message:'you must provide a course to add'})
  }
  Student.findOne( {_id:req.params.id},(err,student)=>{
      if(err)
      {
          return res.status(404).json({success:false,error:err})
      }
  student.courses.push(body.courseId)

  student.save().then(()=>{
      return res.status(200).json({
          success:true,
          id:body.courseId,
          message:'course add',
      })
  })
  .catch(error => {
      return res.status(400).json({
          error,
          message:'course not added!',
      })
  })
  })
  
}
getStudentById=async(req,res)=>
{
  await Student.findOne({_id:req.params.id},(err,student)=>{
    if(err){
      return res.status(400).json({success:false,error:err})
    }
   
    if(!student){
      return res.status(404).json({success:false,error:'Student not found'})
    }
    
  return res.status(200).json({success:true,data:student})
  }).populate('course')
    .exec()
    .catch(err=>console.log(err))
  
}


module.exports={
    getStudent,
    updateStudent,
    // createStudnet,
    reigsiterStudent,
    loginStudent,
    addCourse,
   getStudentById
}
