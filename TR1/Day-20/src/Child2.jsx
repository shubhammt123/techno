import React, { useContext } from 'react'
import { CountContext } from './context/CountProvider'

const Child2 = ({count , setCount}) => {
    const { countValue } = useContext(CountContext)
  return (
    <div className='bg-blue-300 w-4/5 h-4/5 text-3xl flex flex-col justify-center items-center'>
      Child 2
      <p>count : {count}</p>
      <p>Count-Value : {countValue}</p>
    </div>
  )
}

export default Child2