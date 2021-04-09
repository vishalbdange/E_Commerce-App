const mongoose = require('mongoose')
const User = require('../models/User')

exports.signUp = async (req,res) => {

   const {username,email,password} = req.body;
   console.log(username);

   try{
    if(error)
        return res.status(400).json({msg:error.details[0].message})
    const newUser = await User.create({username:username,email:email,password:password})
    console.log("New User created using sign Up")
    console.log(newUser)
    return res.status(200).json({ profile: {name:newUser.username,email:newUser.email,id:newUser._id}})
   }catch {

   }
}