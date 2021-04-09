const mongoose = require("mongoose");

//Creating User Schema 
//Key = Atrribute of the user
const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
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
  });