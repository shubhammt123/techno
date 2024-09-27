import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../redux/slices/productSlice';
import { FaEdit } from "react-icons/fa";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productUrl', headerName: 'Product Image', width: 230 , renderCell : (params)=>{
    return (
      <div><img src={`http://localhost:5000/${params.row.productUrl}`} alt="" className='w-10 rounded-full' /></div>
    )
  } },
  { field: 'name', headerName: 'Product name', width: 230 },
  { field: 'category', headerName: 'Category', width: 230 },
  {
    field: 'description',
    headerName: 'Description',
    width: 290,
  },
  { field: 'price', headerName: 'price', width: 230 },
  { field: 'action', headerName: 'Action', width: 230 , renderCell : (params)=>{
    return (
      <div>
        <FaEdit />
      </div>
    )
  } },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const dispatch = useDispatch();

  const { products } = useSelector((state)=>state.product);
  console.log(products);

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
