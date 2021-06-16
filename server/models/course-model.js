const mongoose=require('mongoose')
require('mongoose-type-email');
const Schema=mongoose.Schema

const Course=new Schema(
{
    courseName:{type:String,required:true},
    doctorName:{type:String,required:true},
    courseCode:{type:String,required:true},
    courseDesignator:{type:String,required:true},
    courseDescription:{type:String},
    coursePin:{type:String,required:true},
    semesterYear:{type:Number,required:true},
    semesterType:{type:String,required:true},
    creditHours:{type:Number,required:true},
   // courseId:{type:String,required:true},
    student:[{type:mongoose.SchemaTypes.ObjectId,ref:'students'}], //el ref bykon esm el collection bt3 students
    //drEmail:{type:mongoose.SchemaTypes.Email,required:true},
    doctor:[{type:mongoose.SchemaTypes.ObjectId,ref:'doctors'}],
    meetingId:{type:String,ref:'meeting'}
},
{
    timestamps:true
})
module.exports=mongoose.model('courses',Course)//zy esm courses hena da esm el collection