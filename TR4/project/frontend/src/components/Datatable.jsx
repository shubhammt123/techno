import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../redux/slices/productSlice';


const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({columns}) {
  const dispatch = useDispatch();

  const { products ,   isProductAdded } = useSelector((state)=>state.product);
  console.log(products);

  React.useEffect(()=>{
    dispatch(getAllProduct());
  },[]);

  React.useEffect(()=>{
    if(isProductAdded){
      dispatch(getAllProduct());
    }
  },[isProductAdded])
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
