const Category = require("../models/Category")



    exports.create = async (req,res) => {
        const { category } = req.body;
        try{
            // const categoryExists = await Category.find({ category });
            // if(categoryExists) {
            //     return res.status(400).json({
            //         errorMessage : `${category} already Exists`
            //     })
            // }

 
            let newCategory = new Category();

            newCategory.category = category;
            newCategory = await newCategory.save();

            res.status(200).json({
                category : newCategory,
                successMessage : `${newCategory.category} created SuccessFully !`
            })

        }catch(err) {
            console.log("Category Create Error");
            res.status(500).json({
                errorMessage : "Please try again later"
            });
        }
    }

    exports.readAll = async (req,res) => {

        try{

           const categories  = await Category.find({})   //Get all the categories
           console.log("CAt")
           console.log(categories)
            res.status(200).json({categories})
        }catch(err) {
            console.log("Read All Category Error");
            console.log(err,err.message)
            res.status(500).json({
                errorMessage : "Please try again later"
            });
        }
    }