import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };
  return (
    <div className='mainSidebar'>
      <div>
        <div className='adminContainer'>
          <i className="bi bi-discord fs-3 "></i>
          <h2>ADMIN</h2>
        </div>

        <ui className='uiContainer'>
          <hr></hr><h5>Menu</h5><hr></hr>
          <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
            <li className='liContainer' >
              <i className="bi bi-house-door-fill "></i>
              <p>Home</p>
            </li>
          </Link>
          <Link to={"/employee"} style={{ textDecoration: "none", color:"white"}}>
            <li className='liContainer' >
              <i className="bi bi-person-workspace"></i>
              <p>Employees</p>
            </li>
          </Link>
          <li className='liContainer' >
            <i className="bi bi-journal-check"></i>
            <p>Attendance</p>
          </li>
          <Link to={"/report"} style={{ textDecoration: "none", color:"white"}}>
          <li className='liContainer' >
            <i className="bi bi-briefcase"></i>
            <p>Report</p>
          </li>
          </Link>
          <li className='liContainer' >
            <i className="bi bi-calendar-check"></i>
            <p>Calander</p>
          </li>
          <li className='liContainer' >
            <i className="bi bi-credit-card-2-back"></i>
            <p>Payout</p>
          </li>
          <li className='liContainer' >
            <i className="bi bi-chat-right-text"></i>
            <p>Contact Us</p>
          </li>
          <div className="click ">
              <button  ton onClick={handleLogout}>Logout</button>
          </div>
        </ui>
      </div>
    </div>
  )
}

export default Sidebar