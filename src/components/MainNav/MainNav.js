import React, { Component } from 'react';
// import { Input } from 'reactstrap';
// import { NavLink } from 'react-router-dom';
import './MainNav.css';


class MainNav extends Component {
    render() {
        console.log("MY PROPS BABY", this.props);
        return (
            <div className="mainNav">
                {/* <Input className="col-6" type="search" name="search" id="search" placeholder="Search..." /> */}
                <ul className="headerNav">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about.html">ABOUT</a></li>
                    <li><a href="/contact.html">CONTACT</a></li>
                </ul>
            </div>
        )
    }
}

export default MainNav;