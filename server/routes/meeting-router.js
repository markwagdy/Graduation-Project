const express=require('express')
const MeetingCtrl=require('../controller/meeting-controller')
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

router.post('/meeting',meetingCtrl.createMeeting);
router.put('/meeting/:id',MeetingCtrl.updateMeeting);
router.get('/meetings',MeetingCtrl.getMeetings);
router.delete('/meeting/:id',MeetingCtrl.deleteMeetings)
module.exports=router