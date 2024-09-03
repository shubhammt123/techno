import React from 'react'
import Child2 from './Child2'

const Child1 = ({count , setCount}) => {
  return (
    <div className='bg-green-200 h-4/5 w-4/5 flex  justify-center items-center flex-col'>
        Child1
        <Child2 count={count} setCount={setCount} />
        </div>
  )
}

export default Child1