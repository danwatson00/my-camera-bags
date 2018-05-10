import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './btn.css';

let Btn = (props) => {
    return (
        <div>
            <button type="button" onClick={() => { props.function }} className={props.class}>{props.label}</button>
        </div>
    )
}

export default Btn;