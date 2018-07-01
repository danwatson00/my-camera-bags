import React from 'react';
import Login from '../Login/Login';
import MainNav from '../MainNav/MainNav';
import "./Header.css";


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