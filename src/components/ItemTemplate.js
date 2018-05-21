import React from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import './itemTemplate.css';
// import './button.css';


let ItemTemplate = (props) => {
    return (

        <div className="itemTemplate">
                <div className="">
                    <img src={props.image} className="listImage" alt={props.itemModel}></img>
                    <h4 className="list-headline">{props.itemMake} {props.itemModel}</h4>
                </div>
        </div>

    )
}

export default ItemTemplate;