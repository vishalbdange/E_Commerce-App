const Product = require("../models/Product")
const fs = require("fs");
const { cachedDataVersionTag } = require("v8");
    exports.create = async (req,res) => {

        const {productImage,productName,productDescription,productCategory,productPrice,productQty } = req.body;
        const {filename} = req.file;

        try{
            // const productExists = await Product.find({ productName });
            // if(productExists) {
            //     return res.status(400).json({
            //         errorMessage : `${productName} already Exists`
            //     })
            // }
            console.log(req.file)

            console.log("Product in Control...");
            let newProduct = new Product();
            newProduct.productImage = filename;
            newProduct.productName = productName;
            newProduct.productDescription = productDescription;
            newProduct.productCategory = productCategory;
            newProduct.productPrice = productPrice;
            newProduct.productQty = productQty;

            newProduct = await newProduct.save();
            // console.log(" New  Product Created ",newProduct);

            res.status(200).json({
                product : newProduct,
                successMessage : ` ${newProduct.productName} created SuccessFully !`
            })

        }catch(err) {
            console.log("Product Create Error");
            console.log(err.message)
            res.status(500).json({
                errorMessage : "Please try again later Product"
            });
        }
    }

    exports.readAll = async (req, res) => {
        try {
            const products = await Product.find({}).populate(
                'productCategory',
                'category'
            );
            console.log(products)
            res.json({ products });
        } catch (err) {
            console.log(err, 'productController.readAll error');
            res.status(500).json({
                errorMessage: 'Please try again later',
            });
        }
    };




    exports.read = async (req, res) => {
        try {

            const productId = req.params.productId;
            console.log(productId)

            const product = await Product.findById(productId);
            console.log(product);

            res.json(product);
        } catch (err) {
            console.log(err, 'productController.readOne error');
            res.status(500).json({
                errorMessage: 'Please try again later',
            });
        }
    };

    
    exports.delete = async (req, res) => {
        try {
             const productId = req.params.productId;
             const deletedProduct = await Product.findByIdAndDelete(productId);


             fs.unlink(`uploads/${deletedProduct.productImage}`,(err) => {
                 if(err){
                     console.log(err.message)
                 }
                 console.log("Image SucccessFully Deleted from file system",deletedProduct.productImage)
             })

             res.json(deletedProduct);

        } catch (err) {
            console.log(err.message, 'productController.delete error');
            res.status(500).json({
                errorMessage: 'Please try again later',
            });
        }
    };


    exports.update = async (req, res) => {
        console.log("Insode Edit COntroller")
        console.log("REQ BODY")
        console.log(req.file);
        
        const productId = req.params.productId;
    
        try{
                req.body.productImage = req.file?.filename;
                const oldProduct = await Product.findByIdAndUpdate(productId, req.body);
                console.log("OLD P")
                console.log(oldProduct)
    
            fs.unlink(`uploads/${oldProduct.productImage}`, err  => {
                if(err){
                    console.log(err.message)
                }   
                console.log('Image successfully updated');
            });
        
            res.json({
                successMessage: 'Product successfully updated',
            });
        }
        catch(err){
            console.log(err.message)
        }
    
        
        
    };




















