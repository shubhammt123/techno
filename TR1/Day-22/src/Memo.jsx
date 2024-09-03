import React, { useMemo, useState } from 'react'
import Child from './Child';

const Memo = () => {
    const [count , setCount] = useState(0);
    const [number , setNumber] = useState([10,20,30,40,50]);

    // const sum = useMemo(()=>(
    //     number.reduce((acc,curr)=>{
    //         console.log("Sum computed");
    //         return acc + curr;
    //     })
    // ),[number]);
  return (
    <div className='p-10'>
        <p className='text-gray-200 text-2xl'>{count}</p>
        <button className='bg-gray-200 p-2' onClick={()=>{setCount(count+1)}}>Inc Count</button>
        {/* <p className='text-gray-200 text-2xl'>The sum of Number array is : {sum}</p>
        <button onClick={()=>{setNumber([...number , 1000])}}  className='bg-gray-200 p-2'>Push Num to Array</button> */}
        <Child />
    </div>
  )
}

export default Memo