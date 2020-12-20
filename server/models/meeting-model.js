const mongoose=require('mongoose')
require('mongoose-type-email');
const Schema=mongoose.Schema

const Meeting=new Schema(
{   
    meetingId:{type:String,required:true},
    courseId:{type:mongoose.SchemaTypes.ObjectId,ref:'courses'},
    date: { type: Date, required:true},
 
},
{
    timestamps:true
})
module.exports=mongoose.model('meeting',Meeting)