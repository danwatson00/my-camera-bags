import React from 'react';
import Logo from './Logo';
import LogoPNG from '../img/my-camera-bags-logo.png'

function Sidebar() {
    return (
        <div className="sidebar">
            <Logo src={LogoPNG} alt={"My Camera Bags Logo"} />
            <p>Sidebar</p>
        </div>
    )
}

export default Sidebar;