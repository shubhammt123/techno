import React, { useState } from 'react'
import DataTable from './DataTable'
import ProductFormModel from './ProductFormModel'
import { FaEdit } from "react-icons/fa";
import UserFormModel from './UserFormModel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../redux/slices/productSlice';
import { getAllUser } from '../redux/slices/userSlice';



const AdminUser = () => {
  const [open, setOpen] = useState(false);
  const [isUpdate , setIsUpdate] = useState(false);
  const [rowData , setRowData] = useState(null);
  const [editImage , setEditImage] = useState(false);
  const handleUpdateModel = (data)=>{
    setEditImage(false)
    setRowData(data);
    setOpen(true);
    setIsUpdate(true);
  }

  const addRowData = {
    name : "",
    password : "",
    email :  "",
    phoneNumber : ""
  }

  const dispatch = useDispatch();

  const { users ,   isUserAdded } = useSelector((state)=>state.user);
  React.useEffect(()=>{
    dispatch(getAllUser());
  },[]);

  React.useEffect(()=>{
    if(isUserAdded){
      dispatch(getAllUser());
    }
  },[isUserAdded])
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'name', width: 300 },
    { field: 'email', headerName: 'Email', width: 240 },
    {
      field: 'password',
      headerName: 'Password',
      width: 390,
      renderCell : (params)=>{
        return (
          <div className='font-semibold'>
            ****
          </div>
        )
      }
    },
    { field: 'phoneNumber', headerName: 'Phone No.', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'action', headerName: 'Action', width: 151 , renderCell : (params)=>{
      return (
        <div className='flex items-center h-full cursor-pointer  '>
          <div className='w-1/2 h-4/5 flex justify-center items-center hover:bg-black hover:text-white rounded-full' onClick={()=>{handleUpdateModel(params.row)}}>
          <FaEdit className='text-sm' />
          </div>
          
        </div>
      )
    } },
  ];
  return (
    <div className=''>
      <div className='flex justify-between p-4 m-4'>
        <div><p  className='text-2xl font-semibold'>
          Users
          </p></div>
        <div>
          <button className='p-2 border-2 border-gray-800 text-xs font-medium active:bg-black active:text-white' onClick={()=>{
            setRowData(addRowData);
            setIsUpdate(false);
            setOpen(true)}} >Add Admin</button>
        </div>
      </div>
      <div className='m-4 p-4'>
      <DataTable columns={columns} data={users} />
      </div>
      <UserFormModel open={open}  setOpen={setOpen} isUpdate={isUpdate} row={rowData} editImage={editImage} setEditImage={setEditImage} />
      
    </div>
  )
}

export default AdminUser