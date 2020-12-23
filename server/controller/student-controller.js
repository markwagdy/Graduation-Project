const Student= require('../models/student-model')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const ValidateReigsterInput=require('../validation/register');
const validateLoginInput=require('../validation/login');
const { validate } = require('../models/student-model');

const keys=require('../config/keys')



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
        jwt.sign(
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


}


// createStudnet= (req,res) => {
//     const body=req.body
//     if(!body)
//     {
//         return res.status(400).json({
//             success:false,
//             error:'You must provide a student'
//         })
//     }
//     const student = new Student(body)
//     if(!student)
//     {
//         return res.status(400).json({
//             success:false,
//             error:'err'
//         })
//     }
//     student.save().then(()=>{
//         return res.status(201).json({
//             success:true,
//             id:student._id,
//             message:'Student created',
//         })
//     })
//     .catch(error=>{
//         return res.status(400).json({
//             error,
//             message:"student not created"
//         })
//     })   
// }
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
    getStudents,
    updateStudent,
    // createStudnet,
    reigsiterStudent,
    loginStudent,
   getStudentById
}
