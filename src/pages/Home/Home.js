import React from 'react'
import './Home.css'
import Sidebar from '../../component/Sidebar'
import HomeRightbar from '../../component/HomeRightbar/HomeRightbar'
function Home({ onLogout }) {


  return (
    <div className='mainHome'>
        <Sidebar onLogout={onLogout}/>
        <HomeRightbar />
        
        
    </div>
  )
}

export default Home