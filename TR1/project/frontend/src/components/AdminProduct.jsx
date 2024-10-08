import React, { useState } from 'react'
import DataTable from './DataTable'
import ProductFormModel from './ProductFormModel'
import { FaEdit } from "react-icons/fa";




const AdminProduct = () => {
  const [open, setOpen] = useState(false);
  const [isUpdate , setIsUpdate]= useState(false);
  const [rowData , setRowData] = useState({});
  const [isImageUpdate ,  setIsImageUpdate] = useState(false);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'productUrl', headerName: 'Product Image', width: 190 , renderCell : (params)=>{
      return (
        <div className='flex  items-center h-full'><img src={`http://localhost:5000/${params.row.productUrl}`} alt="" className='w-10 h-10 rounded-full' /></div>
      )
    } },
    { field: 'name', headerName: 'Product name', width: 200 },
    { field: 'category', headerName: 'Category', width: 190 },
    {
      field: 'description',
      headerName: 'Description',
      width: 290,
    },
    { field: 'price', headerName: 'price', width: 150 },
    { field: 'action', headerName: 'Action', width: 100 , renderCell : (params)=>{
      return (
        <div className='flex justify-center items-center h-full cursor-pointer  '>
          <div className='w-1/2 h-4/5 flex justify-center items-center   hover:bg-black hover:text-white rounded-full' onClick={()=>{handleUpdateClick(params.row)}}>
          <FaEdit className='text-sm' />
          </div>
          
        </div>
      )
    } },
  ];

  const handleUpdateClick = (data)=>{
    setIsUpdate(true);
    setIsImageUpdate(false);
    setRowData(data);
    
    setOpen(true)
  }

  const handleAddClick = ()=>{
    setIsUpdate(false);
    setRowData({
      name : "",
      description : "",
      category : "",
      price : ""
    });
    setOpen(true);
  }
  return (
    <div className=''>
      <div className='flex justify-between p-4 m-4'>
        <div><p  className='text-2xl font-semibold'>
          Products
          </p></div>
        <div>
          <button className='p-2 border-2 border-gray-800 text-xs font-medium active:bg-black active:text-white' onClick={()=>{handleAddClick()}} >Add Product</button>
        </div>
      </div>
      <div className='m-4 p-4'>
      <DataTable columns={columns} />
      </div>
      <ProductFormModel open={open}  setOpen={setOpen} row={rowData} isUpdate={isUpdate} isImageUpdate={isImageUpdate} setIsImageUpdate={setIsImageUpdate} />
      
    </div>
  )
}

export default AdminProduct