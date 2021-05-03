const express = require("express");
const app =  express();
const  dotenv = require("dotenv");
const cors =  require("cors")
const morgan  = require("morgan");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth")

//Middleware
app.use(cors());
app.use(morgan("dev"));  //include morgan
app.use(express.json()); //make data available in JSON format //make sure you set content-type in json 
app.use("/api/auth",authRoutes);
//Port
const PORT = process.env.PORT || 5000

dotenv.config({ path: "./config/config.env" });

//connecting to DB
connectDB();
//routes
app.listen(PORT,()=>{
    console.log(`Server Started in ${process.env.NODE_ENV} at the port : ${process.env.PORT}`)
})