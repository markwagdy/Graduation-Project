const Meeting= require('../models/meeting-model')
var multer=require('multer')
const { v4: uuidV4 } = require('uuid')

createMeeting= (req,res) => {
    const body=req.body
    console.log(body);
    if(!body)
    {
        return res.status(400).json({
            success:false,
            error:'You must provide a meeting'
        })
    }
    const meeting = new Meeting(body)
    
    if(!meeting)
    {   
        return res.status(400).json({
            success:false,
            error:'err'
        })
    }
    meeting.save().then(()=>{
        return res.status(201).json({
            success:true,
            id:meeting._id,
            message:'meeting created',
            meeting:meeting
        })
    }).catch(error=>{
        
        return res.status(400).json({
            error,
            message:"meeting not created"
        })
    })   
}
updateMeeting=async(req,res)=>{
    const body=req.body
    if(!body)
    {
        return res.status(400).json({success:false,message:'you must provide a body to update'})
    }
    Meeting.findOne({ _id: req.params.id},(err,meeting)=>{
        if(err)
        {
            return res.status(404).json({success:false,error:err})
        }
        
    
    meeting.date=body.date
    meeting.roomId=body.roomId

    meeting.save().then(()=>{
        return res.status(200).json({
            success:true,
            id:meeting._id,
            message:'meeting Updated',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message:'meeting not updated!',
        })
    })
    })
    
}
getMeetingById=async(req,res)=>{
    const id = req.params._id;
    await Meeting.findOne({ _id:req.params._id},(err,meeting)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!meeting){
            return res.status(404).json({success:false,error:'meeting not found'})
        }
        return res.status(200).json({success:true,data:meeting})
    }).catch(err => console.log(err))
}
getMeetings=async(req,res)=>{
    await Meeting.find({},(err,meetings)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
        if(!meetings.length){
            return res.status(404).json({success:false,error:'Meeting not found'})
        }
        return res.status(200).json({success:true,data:meetings})
    }).catch(err => console.log(err))
}

deleteMeetings=async(req,res)=>{
    await Meeting.findOneAndDelete({ _id: req.params.id},(err,meetings)=>{
        if(err){
            return res.status(400).json({success:false,error:err})
        }
       

        return res.status(200).json({success:true,message:"meeting deleted"})

      
    }).catch(err => console.log(err))
}

module.exports={
    getMeetings,
    updateMeeting,
    createMeeting,
    deleteMeetings,
    getMeetingById
  
}
