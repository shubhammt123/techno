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
exports.updateProduct = async (req,res,next)=>{
    const { id } = req.params;
    try {
        const isExisting = await Product.findById(id);
        if(!isExisting){
            const error = new Error("Product not found");
            error.name = "NotFound";
            error.statusCode = 404;
            throw error;
        }
        const product = await Product.findByIdAndUpdate(id , req.body , { new : true});
        res.status(201).send({message : "Product Updated" , data : product});
    } catch (error) {
        next(error);
    }
};
exports.updateProductWithImage = async (req,res,next)=>{
    const { id } = req.params;
    const productUrl = req.file.path;
    console.log(productUrl);
    console.log(id);
    console.log(req.body)
    const reqBody = { ...req.body , productUrl : productUrl };
    try {
        const isExisting = await Product.findById(id);
        if(!isExisting){
            const error = new Error("Product not found");
            error.name = "NotFound";
            error.statusCode = 404;
            throw error;
        }

        const product = await Product.findByIdAndUpdate(id , reqBody , { new : true});
        res.status(201).send({message : "Product Updated" , data : product});
    } catch (error) {
        next(error);
    }
};