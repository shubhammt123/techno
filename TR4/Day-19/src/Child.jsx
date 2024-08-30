import React, { useContext } from 'react'
import Child1 from './Child1'
import { CountContext } from './Context/CountProvider'

const Child = () => {
    const {count, setCount } = useContext(CountContext)
  return (
    <div className='bg-green-300 p-10 w-full text-gray-800 text-center'>
        Child
        {/* <p>The Value of Count is : {count}</p> */}
        {/* <button className='p-2 bg-slate-200 shadow rounded text-gray-800 m-4 active:bg-slate-400' onClick={()=>{
            setCount(count-1);
        }}>Dec Count(-)</button> */}
        <button className='p-2 bg-slate-200 shadow rounded text-gray-800 m-4 active:bg-slate-400' onClick={()=>{
           setCount(count+1);
        setCount(count+1)}}>Inc Count(+)</button>
        <Child1 />
        </div>
  )
}

export default Child