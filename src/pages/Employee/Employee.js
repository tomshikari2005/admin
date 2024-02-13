import React from 'react'
import './Employee.css'
import Sidebar from '../../component/Sidebar'
import Employees from '../../component/Employees'
function Employee() {
  return (
    <div className='employeeContainer'>
        <Sidebar />
        <Employees />
    </div>
  )
}

export default Employee