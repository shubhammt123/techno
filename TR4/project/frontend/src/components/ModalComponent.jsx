import React, { useEffect } from 'react'
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/slices/productSlice';

const ModalComponent = ({open , setOpen}) => {

  const { handleSubmit , register } = useForm();
  const { isProductAdded } = useSelector((state)=>state.product);
  const dispatch = useDispatch();
  const onSubmit = (data)=>{
    console.log("On SUbmit Hanlder")
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("price",data.price);
    formData.append("category",data.category);
    formData.append("description",data.description);
    formData.append("productImage",data.productImage[0]);
    dispatch(addProduct(formData));
  }

  useEffect(()=>{
    setOpen(false);
  },[isProductAdded]);
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
          sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: 'lg', mb: 1 }}
          >
            Add Product
          </Typography>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-5 my-5'>
                <div>
                    <label className='text-sm block '>Product Name</label>
                    <input type="text" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3' {...register("name")} />
                </div>
                <div>
                <label className='text-sm block '>Price</label>
                <input type="text" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3' {...register("price")} />
                </div>
                <div>
                <label className='text-sm block '>Description</label>
                <input type="text" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3' {...register("description")} />
                </div>
                <div>
                <label className='text-sm block '>Category</label>
                <input type="text" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3' {...register("category")} />
                </div>
                <div>
                <label className='text-sm block '>Image</label>
                <input type="file" className='p-2 py-1 border border-gray-800 outline-none bg-transparent my-3 text-xs' {...register("productImage")} />
                </div>
                </div>
                <button className='bg-black text-white text-xs p-2 active:bg-gray-800'>
                    Add Product
                </button>
            </form>
          </Box>
        </Sheet>
      </Modal>
    </div>
  )
}

export default ModalComponent