const Doctor= require('../models/doctor-model')
const Student= require('../models/student-model')
var multer=require('multer')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const validateRegisterInput=require('../validation/register');
const validateLoginInput=require('../validation/login');
const keys=require('../config/keys');


loginDoctor=(req,res)=>{
    const {errors,isValid} =validateLoginInput(req.body);
    
    
        // Check validation
        if (!isValid) {
             return res.status(400).json(errors);
        }
    
         const email = req.body.email;
         const password = req.body.password;
    
        // Find student by email
        Doctor.findOne({ email }).then(doctor => {
        // Check if student exists
        if (!doctor) {
          return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check password
        bcrypt.compare(password, doctor.password).then(isMatch => {
            if (isMatch) {
              
              // User matched
              // Create JWT Payload
              const payload = {
                id: doctor.acadId,
                name: doctor.name
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
      
    
    
    
    
    
registerDoctor=(req,res)=>{
    const {errors,isValid}=validateRegisterInput(req.body);
    
    
        if(!isValid){
            return res.status(400).json(errors);
        }
        Student.findOne({email:req.body.email}).then(student=>{
            if(student){
                return res.status(400).json({email:"Email already exists"});
            }
        else{
        Doctor.findOne({email:req.body.email}).then(doctor=>{
            if(doctor){
                return res.status(400).json({email:"Email already exists"});
            }else{
                    const newdocotr =new Doctor(req.body);
    
            
            //Hashing password in database
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newdocotr.password,salt,(err,hash)=>{
                    if (err) throw err;
                    newdocotr.password = hash;
                    newdocotr
                      .save()
                      .then(doctor => res.json(doctor))
                      .catch(err => console.log(err));
                })
            })
        }
            })    
    
    }})
}
    
// createDoctor= (req,res) => {
//     const body=req.body
//     if(!body)
//     {
//         return res.status(400).json({
//             success:false,
//             error:'You must provide a doctor'
//         })
//     }
//     const doctor = new Doctor(body)
//     if(!doctor)
//     {
//         return res.status(400).json({
//             success:false,
//             error:'err'
//         })
//     }
//     doctor.save().then(()=>{
//         return res.status(201).json({
//             success:true,
//             id:doctor._id,
//             message:'doctor created',
//         })
//     })
//     .catch(error=>{
//         return res.status(400).json({
//             error,
//             message:"doctor not created"
//         })
//     })   
// }
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
addCourse=async(req,res)=>{
    const body=req.body
    if(!body)
    {
        return res.status(400).json({success:false,message:'you must provide a course to add'})
    }
    Doctor.findOne( {_id:req.params.id},(err,doctor)=>{
        if(err)
        {
            return res.status(404).json({success:false,error:err})
        }
    doctor.courses.push(body.courseId)
    // doctor.photo=body.photo

    doctor.save().then(()=>{
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
getDoctor=async(req,res)=>{

    const email = req.params.email;
    await Doctor.findOne({ email},(err,doctor)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!doctor){
            return res.status(404).json({success:false,error:'Doctor not found'})
        }
        return res.status(200).json({success:true,doc:doctor})
    }).populate('course').exec().catch(err => console.log(err))
}
deleteDoctors=async(req,res)=>{
    await Doctor.findOneAndDelete({ _id: req.params.id},(err,doctors)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
       

        return res.status(200).json({success:true,message:"doctor deleted"})

      
    }).catch(err => console.log(err))
}

module.exports={
    getDoctor,
    updateDoctor,
    //createDoctor,
    deleteDoctors,
    addCourse,
    registerDoctor,
    loginDoctor
}
// router.post('/registerdoctor',DoctorCtrl.reigsiterdoctor)
// router.post('/logindoctor',DoctorCtrl.loginDoctor);