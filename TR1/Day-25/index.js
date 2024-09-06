const EventEmitter = require("events");
const http = require("http");

const event = new EventEmitter();

let storedData;

const server = http.createServer((req,res)=>{
    if(req.method === "POST"){
        let body = "";
        req.on("data",(chunk)=>{
            body += chunk.toString();
        });

        req.on("end",()=>{
            storedData = JSON.parse(body);
            // res.writeHead(200,{"Content-Type": "text/plain"});
            res.end(JSON.stringify(storedData));
        })
    }
    // if(req.url === "/"){
    //     res.end("Home Page");
    //     // event.emit("homePageAccessed");
    // }else if(req.url === "/about"){
    //     res.end("About Page");
    //     // event.emit("aboutPageAccessed");
    // }else {
    //     res.end("Unknown Route");
    //     // event.emit("unknownPageAccessed",req.url);
    // }
});

// server.on("request",(req,res)=>{
//     console.log(`Request called, Url : ${req.url}`);
// })

// server.on("connection",(socket)=>{
//     console.log("New connection made");
// })

// server.on("close",()=>{
//     console.log("Server closed");
// });

// setTimeout(()=>{
//     server.close();
// },5000);


// event.on("homePageAccessed",()=>{
//     console.log("Home Api called")
// })
// event.on("aboutPageAccessed",()=>{
//     console.log("About Api called")
// })
// event.on("unknownPageAccessed",(url)=>{
//     console.log("Unknown Api called",url)
// })

// event.on("myName",(name , age)=>{
//     console.log(`Hello my name is ${name} and age is ${age}  , First Event Emitter`);
// });
// event.on("myName",(name , age)=>{
//     console.log(`Hello my name is ${name} and age is ${age}, Second Event Emitter`);
// });

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on 3000")
})


// event.emit("myName","shubham",26);