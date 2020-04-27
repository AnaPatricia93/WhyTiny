import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import houseService from '../services/houses';

class RemoveDialogComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sure: false
        }
    }

    handleRemove(){
        houseService.remove(this.props.houseId)
    }

    render() {
        const {show, handleClose} = this.props;
        const sure = this.state;

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    If you proceed this action this element will be deleted permanently.&nbsp;
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" disabled={!sure} onClick={() => this.handleRemove()}>Remove</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default RemoveDialogComponent;