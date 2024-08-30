import React from 'react'

const Child = ({count , setCount}) => {
  return (
    <div className='text-2xl bg-green-200 p-5 m-5'>
        Child 1
        <p className='text-xl'>The Value of count inside Child : {count}</p>
        <button className="bg-slate-700 text-white p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
       setCount(count-1);
      }}>Dec Count(-)</button>
      <button className="bg-slate-700 text-white p-2 m-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
        setCount(count+1);
      }}>Inc Count(+)</button>
    </div> 
  )
}

export default Child