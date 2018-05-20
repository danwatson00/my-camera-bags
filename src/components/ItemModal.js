import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ItemTemplate from './ItemTemplate';


class ItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.addToUserItems = this.addToUserItems.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });


    }

    addToUserItems() {
        console.log("these here props", this.props);
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

        fetch('{firebase.initializeApp.databaseURL}/items.json',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(userItemObj)
            })

        this.setState({
            modal: !this.state.modal
        });

    }
    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <ItemTemplate
                            image={this.props.image}
                            price={this.props.price}
                            quantity={this.props.quantity}
                            name={this.props.name}
                            category={this.props.category}
                            description={this.props.description} />
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





export default ItemModal;
