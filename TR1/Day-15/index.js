// console.log(a);
// console.log(sum());
// // Event Loop , Timers functions , call back hell , Promises  , Async Await , Constructor , Classes

// var a = 20;
// let b = 1000;


// function sum(){
//     let x = 200;
//     let y = 300;
//     function add(){
//         return x + y;
//     }
//     return add();
// }

// let sum = function(){
//     let x = 200;
//     let y = 300;
//     function add(){
//         return x + y;
//     }
//     return add();
// }

// let c = 100;

// console.log(a , b ,c);

// sum();

// Timers Functions

// let timeout = setTimeout(()=>{
//   console.log("Hello Techno");  
// }, 5000);

// let interval = setInterval(() => {
//    console.log(Math.random()); 
// }, 2000);

// document.getElementById("button").addEventListener("click",function(){
//     console.log("Stop button clicked");
//     clearInterval(interval);
// });
// document.getElementById("timeout").addEventListener("click",function(){
//     console.log("Stop Timeout button clicked");
//     clearTimeout(timeout);
// });

// Async Js


// let a = 20;
// let b = 30;
// console.log(a+b);

// setTimeout(()=>{
//     console.log("Hello Techno");
// },0);

// console.log(a);

// setTimeout(()=>{
//     console.log("Second Timeout")
// },1000);
// console.log(b);

// Promises

// call backs or ca

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 Completed");
        callback();
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 Completed");
        callback();
    }, 1000)
}
function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 Completed");
        callback();
    }, 1000)
}
// Call back hell
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All Steps Completed");
//         })
//     })
// })

// Promises

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let data = {
                    firstName: "Shubham",
                    lastName: "Jain"
                };
                return resolve(data);
            } catch (error) {
                return reject(error);
            }
        }, 2000);
    })
}

// let fetchedData = fetchData();
// console.log(fetchedData);

// // Promise States -- Pending , fulfilled , rejected
// // Pending -- fulfilled
// // Pending -- Reject

// fetchedData
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });


// https://fakestoreapi.com/products

// function fetchData(){
//     let data = fetch("https://fakestoreapi.com/products");
//     // console.log("Next Step After Fetching");
//     return data;
// }

// let fetchedData = fetchData();
// console.log(fetchedData);
// fetchedData
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });

// document.getElementById("product-button").addEventListener("click",function(){
//     fetch("https://fakestoreapi.com/products")
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.forEach((item) => {
//             console.log(item.image);
//             let newDiv = document.createElement("div");
//             newDiv.innerHTML = `<img style='width : 100px' src=${item.image} alt='Product-Image' ><h3>${item.title}</h3><p>${item.price}</p>`;
//             let myDiv = document.getElementById("products");
//             myDiv.appendChild(newDiv);
//         });
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// });


// Async Await

async function fetchUserData(){
    try {
        let response = await fetchData();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

fetchUserData();
