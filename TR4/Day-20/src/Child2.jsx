import React, { useContext } from 'react'
import { CountContext } from './Context/CountProvider'

const Child2 = () => {
    const { count } = useContext(CountContext);
  return (
    <div className='bg-blue-300 p-10'>Child2
    <p>The value of count is : {count}</p>
    </div>
  )
}

export default Child2