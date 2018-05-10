import React from 'react';
import Login from './Login';
import LogoutBtn from './LogoutBtn';
import "./header.css";


class Header extends React.Component {
  
  render() {
    return (
      <div className="header">
        
        <Login />
        <LogoutBtn />
      </div>
    );
  }
}

export default Header;