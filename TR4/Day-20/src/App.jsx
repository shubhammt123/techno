import { useEffect, useState } from "react";
import Card from "./Card"
import Login from "./Login"
import State from "./State"
import Child from "./Child";
import ProductList from "./ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Services from "./Services";
import AboutUs from "./AboutUs";


const data = [
  {
    heading: "card 1",
    desc: "This is Card 1 Desc",
    color: "bg-slate-100",
    image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
  },
  {
    heading: "card 2",
    desc: "This is Card 2 Desc",
    color: "bg-red-200",
    image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
  },
  {
    heading: "card 3",
    desc: "This is Card 3 Desc",
    color: "bg-green-200",
    image: "https://www.zzzone.co.uk/wp-content/uploads/2021/05/Creative-Product-Photography-2.jpg"
  },
  {
    heading: "card 4",
    desc: "This is Card 4 Desc",
    color: "bg-yellow-200",
    image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
  },
  {
    heading: "card 5",
    desc: "This is Card 5 Desc",
    color: "bg-purple-200",
    image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
  },
  {
    heading: "card 6",
    desc: "This is Card 6 Desc",
    color: "bg-cyan-200",
    image: "https://th.bing.com/th/id/OIP.QRAV-vDWSoURt7CKtQn1PgHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
  },
  {
    heading: "card 7",
    desc: "This is Card 7 Desc",
    color: "bg-blue-100",
    image: "https://th.bing.com/th/id/OIP.KT2xbgX0E18-ndqTSclMHgHaJC?pid=ImgDet&w=208&h=254&c=7&dpr=1.5"
  },

]


function App() {

  const [count , setCount] = useState(0);
  const [productId , setProductId] = useState(1);

  const fetchData = async (id)=>{
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    console.log("Inside UseEffect")
    fetchData(productId);
  },[productId])

  return (
    <div className="p-4 ">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      {/* Context Apis */}
      {/* <button className="bg-green-400 mx-3" onClick={()=>{setCount(count+1)}}>Inc Count</button>
      <button className="bg-gray-300" onClick={()=>{setProductId(productId+1)}}>Inc Product Id</button> */}
      {/* <State /> */}
      {/* <Login /> */}
      {/* <ProductList /> */}
      {/* <p className="text-2xl font-medium">App</p> */}
      {/* <Child /> */}
      {/* {
        data.map((item , i)=>{
          return (
            <Card item={item} />
          )
          
        })
      } */}
      
    </div>
  )
}

export default App
