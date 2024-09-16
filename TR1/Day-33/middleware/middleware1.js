const middleWare1 = (req,res,next)=>{
    const randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber % 2 !== 0){
        res.send({Message : "Unauthorized"});
    }else{
        console.log("User Authenticated");
        next();
    }
}

module.exports = middleWare1;