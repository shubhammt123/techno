import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [users , setUsers] = useState([]);
    const [isAddUser , setIsAddUser] = useState(false);
    const fetchData = async ()=>{
        try {
            const response = await fetch("http://localhost:3000/api/user");
            const data = await response.json();
            console.log(data.data)
            setUsers(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
  return (
    <div>
        <div className='flex justify-between w-[96%] mx-auto py-5'>
            <div>
            <h1 className='text-2xl font-medium'>
                Users
            </h1>
            </div>
            <div>
                {isAddUser ? 
                (
                    <button className='bg-blue-500 text-white font-medium p-2 px-4 shadow rounded-full active:bg-blue-600' onClick={()=>{
                        setIsAddUser(false);
                    }}>x</button>
                ) :
                (
                    <button className='bg-blue-500 text-white font-medium p-2 shadow rounded active:bg-blue-600' onClick={()=>{
                        setIsAddUser(true);
                    }}>Add User</button>
                )
                }
            </div>
        </div>
        {
            isAddUser ? (
                <div>Form</div>
            ) : 
            <div className='w-[96%] mx-auto overflow-auto h-[72vh] bg-white shadow-lg rounded-xl'>
            <table className='w-full bg-white border-separate border-spacing-y-4 border-separate-x-2 rounded-xl'>
                <thead>
                    <tr>
                        <th>
                            S.No.
                        </th>
                        <th>
                            Full Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Contact Details
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item , i)=>{
                            return (
                                <tr key={i} className='text-center'>
                                    <td>
                                        {i+1}
                                    </td>
                                    <td>
                                        {item.firstName} {item.lastName}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        {item.contactDetails || "---"} 
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        }
        
    </div>
  )
}

export default Dashboard