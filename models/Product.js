const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    productImage:{
        type: "String", 
        required : true,
    },
    productName:{
        type:String,
        required:true,
        trim : true,
        maxlength:50
    },
    productDescription:{
        type:String,
        required:true,
        trim : true,
        maxlength:50
    }, 
    productPrice:{
        type:Number,
        required:true,

    },
    productCategory:{
        type:ObjectId,
        ref:"Category",
        required : true,
    }, 

    productQty:{
        type:Number,
        required:true,
    },
    
  },{timestamps : true});

  const Product = mongoose.model("Product",ProductSchema)
  module.exports = Product;