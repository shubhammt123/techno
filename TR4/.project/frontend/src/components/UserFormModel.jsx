import React, { useEffect, useState } from 'react'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import { addAdmin, updateUser } from '../redux/slices/userSlice';

const UserFormModel = ({open,setOpen , isUpdate , row , editImage , setEditImage}) => {
  
    const { register , handleSubmit , reset ,setValue , watch } = useForm();

    const { isUserAdded } = useSelector((state)=>state.user);

    const dispatch = useDispatch();

    const onSubmit = (data)=>{
      if(isUpdate){
          dispatch(updateUser(data));
      }else{
        const formData = {...data,role : "Admin"}
        dispatch(addAdmin(formData));
    }
      }

        

    useEffect(()=>{
      if(isUserAdded){
        setOpen(false);
      }
    },[isUserAdded]);

    useEffect(()=>{
      if(row){
        reset(row)
        if (row.status !== undefined) {
            setValue("status", row.status);
          }
      }
    },[row,reset]);
  return (
    <div>
        <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{ minWidth: 300, p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
            {isUpdate ? "Update User" : "Add Admin"}
          </Typography>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-5 my-5'>
                <div>
                    <label className='text-sm block '>Name</label>
                    <input type="text" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3' {...register("name")} />
                </div>
                <div>
                <label className='text-sm block '>Email</label>
                <input type="text" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3' {...register("email")} />
                </div>
                <div>
                <label className='text-sm block '>Password</label>
                <input type="text" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3' {...register("password")} />
                </div>
                <div>
                <label className='text-sm block '>Phone No.</label>
                <input type="text" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3' {...register("phoneNumber")} />
                </div>
                <div>
                <label className='text-sm block '>Status</label>
                <div className='flex'>
                <Switch
                      {...register("status")} 
                      onChange={(e) => setValue("status", e.target.checked)}
                      defaultChecked={isUpdate ?  row?.status : true}
                    />
                    <p>{watch("status") ? "Active" : "Inactive"}</p>
                </div>
                
                </div>
                </div>
                <button className='bg-black text-white text-xs p-2 active:bg-gray-800'>
                {isUpdate ? "Update User" : "Add Admin"}
                </button>
            </form>
          </Box>
        </Sheet>
      </Modal>
    </div>
  )
}

export default UserFormModel