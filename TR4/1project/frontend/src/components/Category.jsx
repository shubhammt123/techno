import React from 'react'

const Category = () => {
  return (
    <div className='flex justify-center items-center gap-10 h-32'>
        <div className='hover:border-b-2 border-gray-700 px-1 cursor-pointer'>Men</div>
        <div className='hover:border-b-2 border-gray-700 px-1 cursor-pointer'>Women</div>
        <div className='hover:border-b-2 border-gray-700 px-1 cursor-pointer'>Kids</div>
    </div>
  )
}

export default Category