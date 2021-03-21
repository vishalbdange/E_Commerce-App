const mongoose = require("mongoose");

//Creating User Schema 
//Key = Atrribute of the user
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profilePic:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt :{
        type: Date,
        default:Date.now(),
    },
    updatedAt :{
        type: Date,
        default:Date.now()
    },
    location:{
        type:String,
        required:true
    },
    soldProducts:Number,
  });