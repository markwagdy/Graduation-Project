const mongoose= require('mongoose');
const { model } = require('../data/db');
require('mongoose-type-email');
const Schema=mongoose.Schema
const  role  = require('../_helpers/role')
const Doctor=new Schema(
{
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type: String,default:role.doctor},
    email:{type:mongoose.SchemaTypes.Email,required:true},
    course:{type:mongoose.SchemaTypes.ObjectId,ref:'courses'},
},
    {
        timestamps:true
    },
)
module.exports=mongoose.model('doctors',Doctor)