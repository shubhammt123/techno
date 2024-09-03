import React, { useCallback, useState } from 'react'
import Child from './Child';

const Callback = () => {
    const [count , setCount] = useState(0);
    const increment = useCallback(()=>{
        setCount(count + 1);
    })
  return (
    <div className='p-10'>
        <p className='text-gray-200 text-2xl'>{count}</p>
        <button className='bg-gray-200 p-2' onClick={increment}>Inc Count</button>
        <Child />
    </div>
  )
}

export default Callback