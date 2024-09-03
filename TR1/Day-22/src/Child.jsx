import React from 'react'
import Child1 from './Child1'

const Child = React.memo(() => {
  console.log("Child Component Rendered")
  return (
    <div className='bg-orange-300 w-4/5 h-4/5 text-3xl flex flex-col justify-center items-center'>
      Child
      {/* <Child1 count={count} setCount={setCount} /> */}
    </div>
  )
})

export default Child