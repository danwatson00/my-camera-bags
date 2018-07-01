import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserItemModal.css';


class UserItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    addToUserItems() {
        console.log("addToUserItems props", this.props);
        let userItemObj = {
            "productId": this.props.id,
            "itemCategory": this.props.itemCategory,
            "itemCondition": this.props.itemCondition,
            "itemDescription": this.props.itemDescription,
            "itemImageURL": this.props.itemImageURL,
            "itemMake": this.props.itemMake,
            "itemModel": this.props.itemModel,
            "itemNotes": this.props.itemNotes,
            "itemSubCategory": this.props.itemSubCategory,
            "manualURL": this.props.manualURL,
            "uid": this.props.uid
        }

        fetch('https://my-camera-bag.firebaseio.com/userItems.json',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(userItemObj)
            })

    }

    render() {
        return (
            <div id={this.props.id} className="itemCard">
                <img src={this.props.itemImageURL} className="listImage" alt={this.props.itemModel}></img>
                <h4 className="list-headline">{this.props.itemMake}{this.props.itemModel}</h4>
                <button id={this.props.id + "btn"} onClick={() => this.addToUserItems()} className="addItem-btn btn btn-outline-secondary">Add Item To My Gear</button>
                <button id={this.props.id} onClick={this.toggle} className="info-btn btn btn-outline-secondary" data-toggle="modal">More Info</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <img src={this.props.itemImageURL} className="modal-image" alt={this.props.itemMake}></img>
                        <h5 className="infoModal-h5">Item Description</h5>
                        <p>{this.props.itemDescription}</p>
                        <h5>Product Manual</h5><p><a href={this.props.itemManualURL}>{this.props.itemMake} {this.props.itemModel} Manual</a></p>

                        <Button color="success" onClick={this.toggleNested}>Edit Item</Button>
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Nested Modal title</ModalHeader>
                            <ModalBody>Stuff and things</ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

// <ItemTemplate
//     image={this.props.image}
//     price={this.props.price}
//     quantity={this.props.quantity}
//     name={this.props.name}
//     category={this.props.category}
//     description={this.props.description} />



export default UserItemModal;
