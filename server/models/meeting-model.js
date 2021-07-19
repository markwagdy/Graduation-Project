const mongoose=require('mongoose')
require('mongoose-type-email');
const Schema=mongoose.Schema

const Meeting=new Schema(
{   
    courseId:{type:mongoose.SchemaTypes.ObjectId,ref:'courses'},
    //date: { type: String, required:true},
    Hour:{ type: String, required:true},
    Minute:{ type: String, required:true},
    Second:{ type: String, required:true},
    Day:{ type: String, required:true},
    Month:{ type: String, required:true},
    Year:{ type: String, required:true},
    MeetingName:{ type: String, required:true}
},
{
    timestamps:true
})
module.exports=mongoose.model('meeting',Meeting)