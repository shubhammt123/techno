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
  const {  products } = useSelector((state)=>state.product);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllProduct());
  },[]);

  const handleAddCart = (data)=>{
    dispatch(addToCart(data));
  }
  return (
    <div>
      <Carousel />
      <Category />
      <div className='w-[90%] mx-auto'>
      <div className='grid grid-cols-4 gap-2 font-sans'>
        {products.map((item , i)=>(
          <div key={i} className='mb-4 bg-white shadow-xl hover:transform hover:scale-[1.01] ease-in-out duration-300'>
          <img src={`http://localhost:5000/${item.productUrl}`} alt="" />
          <div className='flex justify-between items-center p-2 px-3'>
            <div className='mt-5'>
            <p className='text-sm truncate w-28'>{item.name}</p>
            <p className='text-sm'>{item.price}</p>
            </div>
            <div className='mt-5 w-20'>
              <button className='p-2 border border-black text-xs' onClick={()=>{handleAddCart(item)}}>Add to cart</button>
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