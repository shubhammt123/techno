const middleware = (req,res,next)=>{
    const randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber%2 !== 0){
        return res.send({message : "Unauthorized"});
    }else{
        console.log("User Authenticated");
        next();
    }
}

module.exports = middleware;