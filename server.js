const express = require("express");
const app =  express();
const  dotenv = require("dotenv");
const connectDB = require("./config/db");

//Port
const PORT = process.env.PORT || 5000

dotenv.config({ path: "./config/config.env" });

//connecting to DB
connectDB();
//routes

app.use("/users/", require("./routes/users"));

app.listen(PORT,()=>{
    console.log(`Server Started in ${process.env.NODE_ENV} at the port : ${process.env.PORT}`)
})