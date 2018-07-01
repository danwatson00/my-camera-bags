import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./BagModal.css";

class BagModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <div className="itemCardWrap">
                    <div id={this.props.id} className="bagCard">
                        <img src="/img/my-camera-bag-logo-blank" class="bagCardLogo" alt="camera bag image"></img>
                        <h4 className="bag-headline">{this.props.title}</h4>
                        <p className="bagCardContents">Bag Card Contents Here.. </p>
                        <button id={this.props.id + "saveBtn"} className="my-bag-items-btn btn btn-outline-secondary">Save To My Bags</button>
                        <button id={this.props.id + "viewBtn"} onClick={this.toggle} className="my-bag-info-btn btn btn-outline-secondary">View Bag Items</button>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        
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

export default BagModal;