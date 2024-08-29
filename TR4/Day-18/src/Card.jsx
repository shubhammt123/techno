import React from 'react';
import Vector from "./assets/1.jpg";

const Card = ({item}) => {
    const {  heading , desc, color , image } = item
  return (
    <div className={`flex flex-col items-center ${color} p-4 rounded shadow-lg`}>
        <img src={image} alt="" className="w-48" />
        <h1 className="text-2xl font-medium">{heading}</h1>
        <p className="text-gray-600">{desc}</p>
      </div>
  )
}

export default Card