import React from 'react';
import Logo from '../Logo';
import SideNav from '../SideNav/SideNav';
import LogoPNG from '../../img/my-camera-bags-logo.png'
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <Logo src={LogoPNG} class={"logoSidebar"} alt={"My Camera Bags Logo"} />
            <SideNav />
        </div>
    )
}

export default Sidebar;