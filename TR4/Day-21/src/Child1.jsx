import React from 'react'
import Child2 from './Child2'

const Child1 = () => {
  return (
    <div className='bg-orange-400 p-10'>Child1
        <Child2 />
    </div>
  )
}

export default Child1