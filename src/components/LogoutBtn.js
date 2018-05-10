import React, { Component } from 'react';
import { logout } from './Auth';
import Btn from './Btn';

class LogoutBtn extends Component {
    render() {
        return (
            <div>
                <Btn label={"Logout"} function={logout('google')} className={"btn"}/>
            </div>

        )
    }
}

export default LogoutBtn;