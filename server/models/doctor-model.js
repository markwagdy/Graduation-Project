const mongoose= require('mongoose');
const { model } = require('../data/db');
require('mongoose-type-email');
const Schema=mongoose.Schema
const  role  = require('../_helpers/role')
const Gender=Object.freeze({
    Male:'male',
    Female:'female',
    Other:'other',
});
const Doctor=new Schema(
{   username:{type:String,required:true},
    password:{type:String,required:true},
    acadId:{type:String,required:true},
    email:{type:mongoose.SchemaTypes.Email,required:true},
    role:{type:String,default:role.doctor},
    image:{type:Buffer},
    gender:{type:String,enum:Object.values(Gender)},
    online:{type:Boolean,default:false},
    courses:[{type:mongoose.SchemaTypes.ObjectId,ref:'courses'}],
},
    {
        timestamps:true
    },
)
module.exports=mongoose.model('doctors',Doctor)