const errorHandler = (err , req , res , next)=>{
    
    let statusCode = err.statusCode || 500;
    let errorMessage = err.message || "Internal Server error";

    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map(error => error.message);
        statusCode = 400;
        errorMessage = message;
    }

    res.status(statusCode).json({message : errorMessage});
};

module.exports  = errorHandler;