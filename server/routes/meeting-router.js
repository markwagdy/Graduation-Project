const express=require('express')
const MeetingCtrl=require('../controller/meeting-controller')
const {verify} = require('../_helpers/middleware')

const router=express.Router()

router.post('/meeting',verify,MeetingCtrl.createMeeting);
router.put('/meeting/:id',verify,MeetingCtrl.updateMeeting);
router.get('/meetings',verify,MeetingCtrl.getMeetings);
router.delete('/meeting/:id',verify,MeetingCtrl.deleteMeetings)
module.exports=router