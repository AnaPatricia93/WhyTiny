import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import houseService from '../services/houses';

class UpdateDialogComponent extends React.Component {
    toEdit = true;
    constructor(props) {
        super(props)
        this.toEdit = props.book !== undefined
        this.state = this.toEdit ? props.book : {
            title: "",
            description: "",
            category: "",
            author: "",
            publish_year: 0
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if (this.toEdit) {
            houseService.update(this.props.book._id, this.state)
        } else {
            houseService.create(this.state)
        }
    }

    render() {
        const { show, handleClose } = this.props;
        const { title, description, category, author, publish_year } = this.state;

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{this.toEdit ? 'Edit House' : 'CreateHouse'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={evt => this.handleSubmit(evt)}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Cotrol
                                value={title}
                                onChange={evt => this.setState({ title: evt.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Cotrol
                                value={category}
                                onChange={evt => this.setState({ category: evt.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Publish Year</Form.Label>
                            <Form.Cotrol
                                value={publish_year}
                                onChange={evt => this.setState({ publish_year: evt.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Author</Form.Label>
                            <Form.Cotrol
                                value={author}
                                onChange={evt => this.setState({ author: evt.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Cotrol
                                value={description}
                                onChange={evt => this.setState({ description: evt.target.value })} />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                        <Button variant="secondary" type="submit">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>)
    }
}

export default UpdateDialogComponent;