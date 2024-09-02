import { useContext, useEffect, useState } from "react"
import Card1 from "./Card1"
import ProductImage1 from "./assets/1.jpg"
import ProductImage2 from "./assets/2.jpeg"
import ProductImage3 from "./assets/3.jpg"
import ProductImage4 from "./assets/4.jpeg"
import Child from "./Child"
import Login from "./Login"
import { CountContext } from "./context/CountProvider"
import Reducer from "./Reducer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./Signup"
import Home from "./Home"
import Navbar from "./Navbar"

const data = [
  {
    heading : "Card 1",
    description : "Card 1 Description",
    classname : "bg-slate-300",
    image : ProductImage1
  },
  {
    heading : "Card 2",
    description : "Card 2 Description",
    classname : "bg-green-300",
    image : ProductImage2
  },
  {
    heading : "Card 3",
    description : "Card 3 Description",
    classname : "bg-red-300",
    image : ProductImage3
  },
  {
    heading : "Card 4",
    description : "Card 4 Description",
    classname : "bg-blue-300",
    image : ProductImage4
  },
  {
    heading : "Card 5",
    description : "Card 5 Description",
    classname : "bg-cyan-300",
    image : ProductImage2
  },
  {
    heading : "Card 6",
    description : "Card 6 Description",
    classname : "bg-purple-300",
    image : ProductImage3
  },
  {
    heading : "Card 7",
    description : "Card 7 Description",
    classname : "bg-orange-300",
    image : ProductImage4
  },
  {
    heading : "Card 8",
    description : "Card 8 Description",
    classname : "bg-sky-300",
    image : ProductImage1
  },
]

function App() {

  // useState
  const [count , setCount ] = useState(0);
  const [productId , setProductId] = useState(1);
  const { setCountValue } = useContext(CountContext);
  const [apiData , setApiData] = useState([]);
  const [loading , setLoading] = useState(false);

  const fetchData = async ()=>{
    setLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      console.log(data);
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  // useEffect

  useEffect(()=>{
    // fetchData();
    // console.log(count)
    // setCount(prev=>prev+1)
  },[]);

  // if(loading){
  //   return (
  //     <div className="text-3xl text-gray-200 flex justify-center items-center w-full h-screen">Loading...</div>
  //   )
  // }


return (
    <div className="w-full">
      <Navbar />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <p className="text-3xl text-white">App</p>
      <button className="p-2 border-2 text-gray-200 active:bg-gray-200 active:text-gray-700" onClick={()=>{setCountValue((prev)=>prev+1)}}>Update Count Value</button> */}
      {/* <Child count={count} setCount={setCount} /> */}
      {/* <Reducer /> */}
      {/* <button className="border-2 p-2 px-4 border-gray-200 active:bg-gray-700 active:text-gray-200" onClick={()=>{setCount(count+1)}}>+ Count</button>
      <p className="text-2xl">The Value of Count is : {count}</p>
      <p className="text-2xl">The Value of product id is : {productId}</p>
      <button className="border-2 p-2 px-4 border-gray-200 active:bg-gray-700 active:text-gray-200" onClick={()=>{setProductId(productId+1)}}>+ Product Id</button> */}
     {/* <Login /> */}
      {/* Props */}
      {/* {
        apiData.map((item ,i)=>{
          return (
            <Card1 heading={item.title} description={item.price} image={item.image} />
          )
        })
      } */}
      {/* <p className="text-4xl font-medium text-white">The Value of count is : {count}</p> */}
      {/* <Child count={count} setCount={setCount} /> */}
      
{/* <div className="flex gap-4">
<Card1 heading="Card 1" description="This is card 1 desc" classname = "bg-slate-300" image={ProductImage1} />
      <Card1 heading="Card 2" description="This is card 2 desc" classname = "bg-green-300"  image={ProductImage2} />
      <Card1 heading="Card 3" description="This is card 3 desc" classname = "bg-red-300" image={ProductImage3}  />
      <Card1 heading="Card 4" description="This is card 4 desc" classname = "bg-blue-300" image={ProductImage4} />
</div> */}
{/* <p className="text-4xl font-medium text-white">The Value of count is : {count}</p> */}
      </div>
  )
}

export default App
