import React from 'react'
import './Employees.css'
import Navbar from './Navbar'
import { DataGrid } from '@mui/x-data-grid';
import {Employeedata as rows} from './Employeedata';

function Employees() {

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 120 },
    { field: 'lastName', headerName: 'Last name', width: 120 },
    { field: 'job', headerName: 'Job', width: 100 },
    { field: 'skill', headerName: 'Skill', width: 190 },
    { field: 'dob', headerName: 'Dob', width:100},
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'add', headerName: 'Add', width:130},
    {
      field: 'action',
      headerName: 'ACtive',
      width: 100,
      renderCell:(params) =>{
        return(
          <button className='btn btn-secondary userListEdit'>Edit</button>
        )
      }
    },
  ];
  

  return (
    <div className='Employees'>
      <Navbar />
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-12'>
            <div className='emp' style={{ height: 800, width: '97%', }}>
              <DataGrid className='auto'
                style={{color:'white'}}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 13 },
                  },
                }}
                pageSizeOptions={[13, 26,]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees