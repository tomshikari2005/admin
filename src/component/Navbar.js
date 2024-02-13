import React from 'react'
import './Navbar.css'



function Navbar() {
  return (
    <div className='mainNavbarContainer'>
      <div className='dashboardItemsContainer'>
        <i className="bi bi-layout-wtf me-2 dashboardIcon"></i>
        <h2 className='dashText'>Dashboard</h2>
      </div>
      <div className='searchItemsContainer'>
        <i className="bi bi-search me-2 searchIcon" ></i>
        <input className='searchInput' type='' placeholder='Search'/>
      </div>
      <div className='profileitemsContainer'>
        <i className="bi bi-bell notificationIcon me-2"></i>
        <div className='profileItems'>
          <img src="img/admin.jpg" alt="admin" className='profileIcon'/>
          <p>Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar