import React from 'react';

const Card1 = ({heading , classname , image , description}) => {

  return (
    <div className={`p-10 m-2 text-cente ${classname} shadow-xl rounded-lg`}>
      <img src={image} alt="" className='w-[200px]' />
        <h1 className='text-2xl'>{heading}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Card1