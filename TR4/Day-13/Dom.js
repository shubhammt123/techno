// let myDiv = document.getElementById("main");
// console.log(myDiv.id);
// myDiv.id = "container";
// myDiv.className = "header";

// console.log(myDiv.className);
// console.log(myDiv);

// myDiv.style.width = "200px";
// myDiv.style.height = "200px";
// myDiv.style.backgroundColor = "green";
// myDiv.style.borderRadius = "20px";
// myDiv.style.border = "4px solid black";

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));

// myDiv.setAttribute("class","tail");
// console.log(myDiv);

// myDiv.setAttribute("style", "width : 500px ; height : 500px ; background-color : red");

// myDiv.innerHTML
// myDiv.innerText
// myDiv.textContent

// let myDiv1 = document.getElementsByClassName("head")
// console.log(myDiv1);

// for(let i = 0 ; i < myDiv.length ; i++){
//     myDiv[i].style.padding = "20px";
//     myDiv[i].style.margin = "10px";
//     if(i%2===0){
//         myDiv[i].style.backgroundColor = "yellow"
//     }
//      else{
//         myDiv[i].style.backgroundColor = "red"
//     }
// }

// let myDiv = document.getElementsByTagName("div")
// console.log(myDiv);

// let myDiv = document.querySelector("div");

// let myDiv = document.querySelectorAll(".head");
// console.log(myDiv);

// let newArr = Array.from(myDiv);
// let newArr1 = Array.from(myDiv1);

// querySelectorAll returns nodelist which contains forEach
// getElementByClassName and getElementByTagName returns HTMLCollection which doesn't contain forEach

// let newDiv = document.createElement("div");
// newDiv.id = "container";
// newDiv.className = "head";
// newDiv.style.width = "400px";
// newDiv.style.height = "400px";
// newDiv.style.backgroundColor = "yellow";

// document.body.appendChild(newDiv)

let arr = [54,23,12,56,34,29,47,111,108,207,454];

let newArr = arr.sort((a,b)=>b-a);
console.log(newArr);