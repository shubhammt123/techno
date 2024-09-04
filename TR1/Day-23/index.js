const fs = require("fs");
const os = require("os");
const path = require("path");

// console.log(process)

// fs.writeFileSync("read.txt","Welcome to text file");
// fs.writeFileSync("read.txt","Hello Techno");


// let data = fs.readFileSync("readwrite.txt");
// console.log(data.toString());
// console.log("Reading File");

// fs.appendFileSync("read.txt","Welcome to read.txt file");

// fs.renameSync("read.txt","readwrite.txt");

// fs.writeFile("read.txt","Hello TR1 , Welcome Back !",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File Created");
// });
// console.log("After write file sync");

// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(data)
// })

// fs.appendFile("read.txt","This is FSD Session",(err)=>{
//     console.log("file updated")
// })

// fs.mkdir("./folder1",(err)=>{
//     console.log("Folder created")
// })
// fs.writeFile("./folder1/read.txt","Hello This is read file",(err)=>{
//     console.log("file created")
// })

// fs.unlink("./folder1/read.txt",(err)=>{
//     console.log("File deleted")
// })

// fs.rmdir("./folder1",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("folder deleted")
//     }
// });

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.freemem()/1024/1024/1024);
// console.log(os.totalmem()/1024/1024/1024);

// console.log(path.dirname("C:/Users/shubh/Desktop/Techno/TR1/Day-23/index.js"));
// console.log(path.extname("C:/Users/shubh/Desktop/Techno/TR1/Day-23/index.js"));
// console.log(path.basename("C:/Users/shubh/Desktop/Techno/TR1/Day-23/index.js"));

// const fullPath = path.join("user","local","bin","script")
// const absPath = path.resolve("user","local","bin","script")
// console.log(fullPath)
// console.log(absPath)