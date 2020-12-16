const mongoose=require('mongoose')
require('mongoose-type-email');
const Schema=mongoose.Schema

const Course=new Schema(
{
    courseId:{type:String,required:true},
    student:[{type:mongoose.SchemaTypes.ObjectId,ref:'students'}], //el ref bykon esm el collection bt3 students
    drEmail:{type:mongoose.SchemaTypes.Email,required:true},
    meetingId:{type:String,ref:'meeting'},
},
{
    timestamps:true
})
module.exports=mongoose.model('courses',Course)//zy esm courses hena da esm el collection