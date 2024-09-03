import { useEffect, useMemo, useRef, useState } from "react";
import Card from "./Card"
import Login from "./Login"
import State from "./State"
import Child from "./Child";
import ProductList from "./ProductList";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Router from "./router/Router";



function App() {

  const [count , setCount] = useState(0);
  const [numbers , setNumbers ] = useState([10,20,30,40,50,60,70]);

  // const inputRef = useRef(null);

  // useEffect(()=>{
  //   inputRef.current.focus();
  // },[])

  const sum = useMemo(()=>{
    console.log("Reduced Called");
   return numbers.reduce((acc,curr)=>{
      return acc + curr;
    },0);
  },[numbers]);

  return (
    <div className="p-4 ">
      
      <p>
      {count} 
      </p>
       <button onClick={()=>setCount(count+1)}>Inc Count</button>
       <div>
       <button onClick={()=>{setNumbers([...numbers , 1000])}}>Push Number to array</button>
       </div>
       
      {/* <input type="text" placeholder="Enter Name" ref={inputRef} />
      <button onClick={()=>{console.log(inputRef)}}>Show Ref Value</button> */}
      {/* <Navbar /> */}
      {/* <RouterProvider router={Router} /> */}
      <p>
      The Total sum is : {sum}
      </p>
      
      
    </div>
  )
}

export default App
