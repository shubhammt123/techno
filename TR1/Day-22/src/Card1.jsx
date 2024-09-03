import React from 'react';

const Card1 = ({heading , classname , image , description}) => {

  return (
    <div className={`p-10 m-2 text-cente bg-slate-200 ${classname} shadow-xl rounded-lg`}>
      <img src={image} alt="" className='w-48 h-48' />
        <h1 className='text-2xl'>{heading}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Card1