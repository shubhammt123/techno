import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import Category from './Category'
import Product1 from "../assets/p1.jpeg"
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../redux/slices/productSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Home = () => {
  // const [products, setProducts] = useState([0,1,2,3,4,5,6,7,8,9])
  const { products }  = useSelector((state)=>state.product);
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getAllProduct());
},[])

const handleCartAdd = (data)=>{
  dispatch(addToCart(data));
}
  return (
    <div>
      {/* <Carousel />
      <Category /> */}
      <div className='w-[90%] mx-auto'>
      <div className='grid grid-cols-4 gap-2 font-sans'>
        {products.map((item , i)=>(
          <div key={i} className='mb-4'>
          <img src={`http://localhost:5000/${item.productUrl}`} alt="" />
          <div className='flex justify-between items-center'>
            <div className='mt-5'>
            <p className=' text-sm'>{item.name}</p>
            <p className='text-sm'>{item.price}</p>
            </div>
            <div className='mt-5'>
            <button className='p-2 border border-black text-xs' onClick={()=>{handleCartAdd(item)}}>Add to cart</button>
            </div>
          </div>
          
          
        </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home