import React from 'react'

const Card1 = (props) => {
    console.log(props);
  return (
    <div className={`p-10 m-2 text-cente ${props.classname} shadow-xl rounded-lg`}>
        <h1 className='text-2xl'>{props.heading}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card1