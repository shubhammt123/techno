import React, { useState } from 'react'
import Datatable from "./Datatable";
import ModalComponent from './ModalComponent';

const AdminProduct = () => {
  const [open ,setOpen] = useState(false);
  return (
    <div>
      <div className='flex justify-end m-5'>
        <div><button className='my-6 p-2 py-1 border border-black' onClick={()=>{setOpen(true)}}>Add Product</button></div>
      </div>
      <Datatable />
      <ModalComponent open={open}  setOpen={setOpen} />
    </div>
  )
}

export default AdminProduct