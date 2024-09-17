import axios from 'axios';
import React, { useState } from 'react'

const UserForm = ({setIsAddUser , fetchData}) => {
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [address , setAddress] = useState("");
    const [gender , setGender] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/users" , {
                firstName , lastName , email , address ,  gender
            });
            setIsAddUser(false);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='p-4'>
        <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 my-5 '>
                <div>
                    <p className='text-gray-700 m-2'>
                        First Name
                    </p>
                    <input type="text" placeholder='First Name' className='p-2  bg-transparent border border-gray-700 shadow w-4/5' onChange={(e)=>{setFirstName(e.target.value)}} />
                </div>
                <div>
                    <p className='text-gray-700 m-2'>
                        Last Name
                    </p>
                    <input type="text" placeholder='Last Name' className='p-2  bg-transparent border border-gray-700 shadow w-4/5' onChange={(e)=>{setLastName(e.target.value)}} />
                </div>
                <div>
                    <p className='text-gray-700 m-2'>
                        Email
                    </p>
                    <input type="email" placeholder='Email' className='p-2  bg-transparent border border-gray-700  shadow w-4/5' onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    <p className='text-gray-700 m-2'>
                        Address
                    </p>
                    <input type="text" placeholder='Address' className='p-2  bg-transparent border border-gray-700  shadow w-4/5' onChange={(e)=>{setAddress(e.target.value)}} />
                </div>
                <div>
                    <p className='text-gray-700 m-2'>
                        Gender
                    </p>
                    <input type="text" placeholder='Gender' className='p-2  bg-transparent border border-gray-700 shadow w-4/5' onChange={(e)=>{setGender(e.target.value)}} />
                </div>

            </div>
            <button className=' p-2 border-gray-700 border-2'>Submit</button>
        </form>
    </div>
  )
}

export default UserForm