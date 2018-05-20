import React from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import './itemTemplate.css';
// import './button.css';


let ItemTemplate = (props) => {
    return (

        <div className="Product-item">
                <div className="">
                    <img src={props.image} className="listImage" alt={props.itemModel}></img>
                    <h4 className="list-headline">{props.itemMake} {props.itemModel}</h4>
                    <button id={props.id} className="addItem-btn btn btn-outline-secondary">Add Item To My Gear</button>
                    <button id={props.id}infobtn class="info-btn btn  btn btn-outline-secondary" data-toggle="modal" data-target="#{item}-infoModal">More Info</button>
                </div>
        </div>

    )
}

export default ItemTemplate;