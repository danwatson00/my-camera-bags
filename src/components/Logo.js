import React from 'react';
import './logo.css';

let Logo = (props) => {
    return (
        <div>
            <img src={props.src} className={props.class} alt={props.alt} />
        </div>
    )
}

export default Logo;