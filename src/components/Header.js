import React from 'react';
import Login from './Login';
import MainNav from './MainNav';
import "./header.css";


class Header extends React.Component {
  
  render() {
    return (
      <div className="header">
        <MainNav />
        <Login />
      </div>
    );
  }
}

export default Header;