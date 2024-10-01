import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';



const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({columns , data}) {
  
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 , fontSize : "18px" }}
      />
    </Paper>
  );
}
