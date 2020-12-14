const mongoose=require('mongoose')
require('mongoose-type-email');
const Schema=mongoose.Schema

const Course=new Schema(
{
    courseId:{type:String,required:true},
    studentId:[{type:String,ref:'student'}],
    drEmail:{type:mongoose.SchemaTypes.Email,required:true},
    meetingId:{type:String,ref:'meeting'},
},
{
    timestamps:true
})
module.exports=mongoose.model('courses',Course)