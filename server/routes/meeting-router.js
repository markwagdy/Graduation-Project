const express=require('express')
const MeetingCtrl=require('../controller/meeting-controller')


const router=express.Router()

router.post('/meeting',MeetingCtrl.createMeeting);
router.put('/meeting/:id',MeetingCtrl.updateMeeting);
router.get('/meetings',MeetingCtrl.getMeetings);
router.delete('/meeting/:id',MeetingCtrl.deleteMeetings)
module.exports=router