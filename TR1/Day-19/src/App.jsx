import { useState } from "react"
import Card1 from "./Card1"
import ProductImage1 from "./assets/1.jpg"
import ProductImage2 from "./assets/2.jpeg"
import ProductImage3 from "./assets/3.jpg"
import ProductImage4 from "./assets/4.jpeg"
import Child from "./Child"

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

  // let count = 0;
  // console.log(count)

  return (
    <div className=" text-center">
      {/* Props */}
      {/* {
        data.map((item ,i)=>{
          return (
            <Card1 heading={item.heading} classname={item.classname} description={item.description} image={item.image} />
          )
        })
      } */}
      <p className="text-4xl font-medium text-white">The Value of count is : {count}</p>
      <Child count={count} setCount={setCount} />
      
{/* <div className="flex gap-4">
<Card1 heading="Card 1" description="This is card 1 desc" classname = "bg-slate-300" image={ProductImage1} />
      <Card1 heading="Card 2" description="This is card 2 desc" classname = "bg-green-300"  image={ProductImage2} />
      <Card1 heading="Card 3" description="This is card 3 desc" classname = "bg-red-300" image={ProductImage3}  />
      <Card1 heading="Card 4" description="This is card 4 desc" classname = "bg-blue-300" image={ProductImage4} />
</div> */}
<p className="text-4xl font-medium text-white">The Value of count is : {count}</p>
      </div>
  )
}

export default App
