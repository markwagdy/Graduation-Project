const mongoose= require('mongoose');
const { model } = require('../data/db');
require('mongoose-type-email');
const Schema=mongoose.Schema

const Student=new Schema(
{
    username:{type:String,required:true},
    password:{type:String,required:true},
    acadId:{type:String,required:true},
    email:{type:mongoose.SchemaTypes.Email,required:true},
    courseId:{type:String,ref:'course'},
    photo:{type:String},
},
    {
        timestamps:true
    },
)
module.exports=mongoose.model('students',Student)