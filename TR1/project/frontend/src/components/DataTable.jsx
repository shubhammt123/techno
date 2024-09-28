import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../redux/slices/productSlice';


const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({columns}) {
  const dispatch = useDispatch();

  const { products } = useSelector((state)=>state.product);

  React.useEffect(()=>{
    dispatch(getAllProduct());
  },[]);
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
