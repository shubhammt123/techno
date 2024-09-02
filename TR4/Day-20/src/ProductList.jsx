import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [productList , setProductList] = useState([]);
    const [loading , setLoading] = useState(false);

    const fetchData = async ()=>{
        setLoading(true);
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data)
            setProductList(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    if(loading){
        return (
            <div className='text-3xl font-semibold'>Loading...</div>
        )
    }


  return (
    <div className='grid grid-cols-4 gap-4'>
        {productList.length > 0 ? 
        productList.map((item ,i)=>{
            return  (
                <div className='bg-white p-4 flex justify-center items-center flex-col gap-5 shadow-xl rounded'>
                    <img src={item.image} alt="" className='w-48' />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                </div>
            )
        }) : "No Product"}
        
    </div>
  )
}

export default ProductList