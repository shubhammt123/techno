const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");

// fs.writeFileSync("read.txt","Welcome to techno Njr");

// fs.writeFileSync("read.txt","Hello TR4");

// let data = fs.readFileSync("readWrite.txt");
// console.log(data.toString());
// console.log("After Sync request");

// fs.appendFileSync("read.txt","Welcome to techno NJR");

// fs.renameSync("read.txt","readWrite.txt");

// fs.writeFile("read.txt","Welcome to techno NJR",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Created");
//     }
// });

// fs.appendFile("read.txt","Hello TR4",(err)=>{
//     console.log("File updated");
// })

// fs.readFile("readWrite.txt","UTF-8",(err,data)=>{
//     console.log(data);
// });
// console.log("After Async call")

// fs.unlink("read.txt",(err)=>{
//     console.log("File deleted");
// })

// fs.mkdir("folder",(err)=>{
//     console.log("Folder created");
// })

// fs.writeFile("./folder/read.txt","Hello Techno",(err)=>{
//     console.log("file created");
// })

// fs.unlink("./folder/read.txt",(err)=>{
//     console.log("file deleted")
// })

// fs.rmdir("folder",(err)=>{
//     console.log("folder deleted")
// })

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.totalmem()/1024/1024/1024);
// console.log(os.freemem()/1024/1024/1024);

// console.log(path.dirname("C:/Users/shubh/Desktop/Techno/TR4/Day-23/index.js"));
// console.log(path.extname("C:/Users/shubh/Desktop/Techno/TR4/Day-23/index.js"));
// console.log(path.basename("C:/Users/shubh/Desktop/Techno/TR4/Day-23/index.js"));
// console.log(path.parse("C:/Users/shubh/Desktop/Techno/TR4/Day-23/index.js"));

// console.log(path.join("user","ref","folder","bin"));
// console.log(path.resolve("user","ref","folder","bin"));

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("Welcome to http server")
    }else if(req.url == "/about"){
        res.end("About us Page")
    }else{
        res.end("Unknown Page")
    }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on 3000 port")
});

// http://127.0.0.1:3000/