const mongoose= require('mongoose');
const { model } = require('../data/db');
require('mongoose-type-email');
const Schema=mongoose.Schema

const Gender=Object.freeze({
    Male:'male',
    Female:'female',
    Other:'other',
});

const Student=new Schema(
{
    username:{type:String,required:true},
    password:{type:String,required:true},
    acadId:{type:String,required:true},
    email:{type:mongoose.SchemaTypes.Email,required:true},
    course:[{type:mongoose.SchemaTypes.ObjectId,ref:'courses'}],
    image:{type:Buffer},
    gender:{type:String,enum:Object.values(Gender)},
    online:{type:Boolean,default:false}
},
    {
        timestamps:true
    },
);

Object.assign(Student.statics,{Gender,});



module.exports=mongoose.model('students',Student)