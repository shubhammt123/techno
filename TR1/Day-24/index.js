const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Welcome to home route")
    }else if(req.url == "/about"){
        res.end("welcome to about route")
    }else{
        res.end("unknown route");
    }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
});
