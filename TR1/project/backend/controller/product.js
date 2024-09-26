const Product = require("../model/product");

exports.getAllProduct  = async (req,res,next)=>{
    try {
        const products = await Product.find();
        res.status(200).send({message : "Product Fetched" , data : products})
    } catch (error) {
        next(error);
    }
};

exports.createProduct = async (req,res,next)=>{
    const { name , price , description , category  } = req.body;
    const productUrl = req.file.path;
    try {
        const product = new Product({name , price , description , category , productUrl});

        await product.save();
        res.status(201).send({message : "Product Added" , data : product});
    } catch (error) {
        next(error);
    }
};