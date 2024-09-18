import axios from 'axios';
import React, { useState } from 'react'

const UserFrom = ({setIsAddUser , fetchData}) => {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [contactDetails , setContactDetails] = useState("");


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/user" , {
             firstName , lastName , email ,  contactDetails   
            });
            setIsAddUser(false);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-5 mx-5'>
            <div>
            <p className='m-2 text-gray-700 '>First Name</p>
            <input type="text" placeholder='First Name' className='p-2 border border-gray-700 bg-transparent rounded shadow w-3/5' onChange={(e)=>{setFirstName(e.target.value)}} />
        </div>
        <div>
            <p  className='m-2 text-gray-700 '>Last Name</p>
            <input type="text" placeholder='Last Name' className='p-2 border border-gray-700 bg-transparent rounded shadow w-3/5' onChange={(e)=>{setLastName(e.target.value)}} />
        </div>
        <div>
            <p  className='m-2 text-gray-700 '>Email</p>
            <input type="email" placeholder='Email' className='p-2 border border-gray-700 bg-transparent rounded shadow w-3/5' onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div>
            <p  className='m-2 text-gray-700'>Contact Details</p>
            <input type="number" placeholder='Contact Details' className='p-2 border border-gray-700 bg-transparent rounded shadow w-3/5' onChange={(e)=>{setContactDetails(e.target.value)}} />
        </div>
        <div>
            <button type='submit' className='p-2 bg-blue-500 text-white rounded  shadow'>Submit</button>
        </div>
            </div>
        
        </form>
    </div>
  )
}

export default UserFrom