import React from 'react';
import { NavLink } from 'react-router-dom';
import "./sideNav.css";

class SideNav extends React.Component {
    render() {
        return (
            <div className="sideNavDiv">
                <ul className="sideNav">
                    <li><a className="browse-gear-btn first-sidebar-nav">Browse Gear</a></li>
                    <li><a className="browse-bags-btn">Browse Bags</a></li>
                    <li><a className="your-gear-btn sec-sidebar-nav">Your Gear</a></li>
                    <li><a className="your-bags-btn">Your Bags</a></li>
                </ul>
            </div>
        )
    }
}

export default SideNav;


