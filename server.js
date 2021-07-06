const express = require("express");
const app =  express();
const  dotenv = require("dotenv");
const cors =  require("cors")
const morgan  = require("morgan");
const cookieParser = require("cookie-parser")
const connectDB = require("./config/db");



const authRoutes = require("./routes/auth")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
//Middleware
app.use(cors());
app.use(morgan("dev"));  //include morgan
app.use(cookieParser());  
app.use(express.json()); //make data available in JSON format //make sure you set content-type in json 
app.use("/api/auth",authRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/product",productRoutes);
app.use('/uploads',express.static('uploads'));


//Port

const PORT = process.env.PORT || 5000

dotenv.config({ path: "./config/config.env" });

//connecting to DB
connectDB();
//routes
app.listen(PORT,()=>{
    console.log(`Server Started in ${process.env.NODE_ENV} at the port : ${process.env.PORT}`)
})