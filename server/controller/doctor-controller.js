const Doctor= require('../models/doctor-model')
var multer=require('multer')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const ValidateRegisterInput=require('../validation/register');
const validateLoginInput=require('../validation/login');
const { validate } = require('../models/doctor-model');
const keys=require('../config/keys');
// const  doctor  = require('../_helpers/role');

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
           // req.user =  Doctor.findOne({ email })
            // User matched
            // Create JWT Payload
            const payload = {
              id: doctor.id,
              name: doctor.name
            };
        // Sign token
           let accessToken = jwt.sign(payload,keys.secretOrKey,
              { algorithm: "HS256",
                expiresIn: 31556926 // 1 year in seconds
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
            //create the refresh token with the longer lifespan
        let refreshToken = jwt.sign(payload, dhw782wujnd99ahmmakhanjkajikhiwn2n, {
        algorithm: "HS256",
        expiresIn: 864001321215
    })
    //store the refresh token in the user array
   // users[username].refreshToken = refreshToken
    res.cookie("jwt", accessToken, {secure: true, httpOnly: true})
    res.send()
          } else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
        });
      });
    
    
    }
registerDoctor=(req,res)=>{
    const {errors,isValid}=ValidateRegisterInput(req.body);
    
    
        if(!isValid){
            return res.status(400).json(errors);
        }
    
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
        if(!doctors.length){
            return res.status(404).json({success:false,error:'Doctor not found'})
        }
        return res.status(200).json({success:true,data:doctors})
    }).catch(err => console.log(err))
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
    getDoctors,
    updateDoctor,
    //createDoctor,
    deleteDoctors,
    registerDoctor,
    loginDoctor
}
// router.post('/registerdoctor',DoctorCtrl.reigsiterdoctor)
// router.post('/logindoctor',DoctorCtrl.loginDoctor);