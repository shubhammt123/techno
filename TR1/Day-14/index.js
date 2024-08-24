// let myDiv = document.getElementById("main");

// myDiv.id = "container";
// myDiv.className = "head";
// myDiv.style.width = "200px";
// myDiv.style.height = "200px";
// myDiv.style.backgroundColor = "green";
// myDiv.style.borderRadius = "20px";

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));
// console.log(myDiv.getAttribute("style"));

// myDiv.setAttribute("id","text");
// console.log(myDiv.getAttribute("id"));

// myDiv.setAttribute("style","background-color : red");

// let obj = {
//     id : "main",
//     style : {
//         width : "200px",
//         height : "200px",
//         backgroundColor : "green"
//     }
// }

// obj.id = "container";
// obj.style.borderRadius = "20px";


// // setAttribute
// obj.id = "head";
// obj.style = {
//     backgroundColor : "red"
// }

// innerHtml , innerText , textContent


// console.log(myDiv.innerHTML);
// myDiv.innerHTML = "<input type='password' placeholder='Enter Password' ><button>Submit</button>"
// console.log(myDiv.innerText)
// console.log(myDiv.textContent) console the hidden text also

// let myDiv1 = document.getElementsByClassName("head");
// console.log(myDiv1);
// let myDiv = document.getElementsByTagName("div")
// console.log(myDiv);

// let colorArr=["red","green","blue","yellow","brown","black","orange","white"]
// for(let i = 0 ; i < myDiv.length ; i++){
//     myDiv[i].style.padding = "20px";
//     myDiv[i].style.margin = "10px";
//     myDiv[i].style.backgroundColor = colorArr[i]
//     // myDiv[i].style.borderRadius = `${i*10}px`;
// }


// let myDiv = document.querySelector("div");
// let myDiv = document.querySelectorAll(".head");
// console.log(myDiv);

// let newDiv = document.createElement("div");
// newDiv.innerHTML  =  "Hello Techno";
// newDiv.style.backgroundColor = "brown";

// document.body.appendChild(newDiv);

// let myDiv2 = document.getElementById("main");
// myDiv2.appendChild(newDiv);
// let myDiv3 = document.getElementById("container");

// let parentDiv = document.getElementById("heading");
// document.body.insertBefore(newDiv,myDiv3 )

// Events

// document.getElementById("button").onclick = function(){
//    let newDiv = document.createElement("div");
//    newDiv.style.width = "200px";
//    newDiv.style.height = "200px";
//    newDiv.style.backgroundColor = "yellow";
//    document.body.appendChild(newDiv);
// }

// document.getElementById("button").addEventListener("click",function(){
//     let newDiv = document.createElement("div");
//    newDiv.style.width = "200px";
//    newDiv.style.height = "200px";
//    newDiv.style.backgroundColor = "yellow";
//    document.body.appendChild(newDiv);
// })

// document.getElementById("box").addEventListener("mouseenter",function(){
//     document.getElementById("box").style.backgroundColor = "blue";
// })
let obj = {};

function getValue(a){   
    obj[a.target.name] = a.target.value;
    console.log(obj);
}

document.getElementById("name").addEventListener("change",function(event){
    getValue(event)
});
document.getElementById("name1").addEventListener("change",function(event){
    getValue(event)
});

