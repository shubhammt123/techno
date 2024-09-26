import { jwtDecode } from 'jwt-decode'
import React, { useState } from 'react'
import Carousel from './Carousel'
import Category from './Category'
import Product1 from "../assets/p1.jpeg"
import Footer from './Footer'

const Home = () => {
  const [products, setProducts] = useState([0,1,2,3,4,5,6,7,8,9])

  return (
    <div>
      <Carousel />
      <Category />
      <div className='w-[90%] mx-auto'>
      <div className='grid grid-cols-4 gap-2 font-sans'>
        {products.map((item , i)=>(
          <div key={i} className='mb-4'>
          <img src={Product1} alt="" />
          <p className='mt-5 text-sm'>Slim Fit Jacket</p>
          <p className='text-sm'>Rs.5499.00</p>
        </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home