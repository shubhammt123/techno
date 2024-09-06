const EventEimtter = require("events");
const http = require("http");
const event = new EventEimtter();

let storedData;

const server = http.createServer((req,res)=>{
    let body = "";
    if(req.method === "POST"){
        req.on("data",(chunk)=>{
            body += chunk.toString();
        });
        req.on("end",()=>{
            console.log(typeof body);
            storedData = JSON.parse(body);
            console.log(storedData);
            res.end(JSON.stringify(storedData));
        })
    }
    // if(req.url == "/"){
    //     res.end("Home Page");
    //     // event.emit("homePageAccessed")
    // }else if(req.url == "/about"){
    //     res.end("About Route");
    //     // event.emit("aboutPageAccessed");
    // }else{
    //     res.end("Unknown route");
    //     // event.emit("unknownRouteAccessed",req.url);
    // }
});

// server.on("request",(req,res)=>{
//     if(req.url != "/favicon.ico"){
//         console.log("Request Event",req.url);
//     }
// });

// server.on("connection",(socket)=>{
//     console.log("connection");
// });

// server.on("close",()=>{
//     console.log("server closed");
// });

// setTimeout(()=>{
//     server.close();
// },5000);


// event.on("homePageAccessed",()=>{
//     console.log("Home route accessed");
// })
// event.on("aboutPageAccessed",()=>{
//     console.log("About route accessed");
// })
// event.on("unknownRouteAccessed",(url)=>{
//     if(url != "/favicon.ico")
//     console.log("unknown route accessed",url);
// })

// event.on("myName",(name , age)=>{
//     console.log(`My name is ${name} and my age is ${age} , first emmit`);
// });

// event.on("myName",(name , age)=>{
//     console.log(`My name is ${name} and my age is ${age}, second emmit`);
// });

// event.on("myName",(name , age)=>{
//     console.log(`My name is ${name} and my age is ${age} , third emmit`);
// });



// event.emit("myName","shubham",100);

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on 3000");
});