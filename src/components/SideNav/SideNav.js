import React from 'react';
import * as routes from '../../constants/routes'
import "./SideNav.css";
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
    render() {
        return (
                <div className="sideNavDiv">
                    <ul className="sideNav">
                        <li><Link to={routes.ALL_GEAR} className="browse-gear-btn first-sidebar-nav">Browse Gear</Link></li>
                        <li><Link to={routes.ALL_BAGS} className="browse-bags-btn">Browse Bags</Link></li>
                        <li><Link to={routes.MY_GEAR} className="your-gear-btn sec-sidebar-nav">Your Gear</Link></li>
                        <li><Link to={routes.MY_BAGS} className="your-bags-btn">Your Bags</Link></li>
                    </ul>
                    
                    
                </div>
        )
    }
}

export default SideNav;


