import React from 'react';
import '../General.css'
import { Jumbotron, Row, Col, Badge, Button, Alert, Container } from 'react-bootstrap';
import houseService from '../../services/houses';
import RemoveDialogComponent from '../../components/RemoveDialog';
import UpdateDialogComponent from '../../components/UpdateDialog'


class HouseDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            house: undefined,
            toRemove: false,
            toUpdate: false
        }
    }

    componentDidMount() {
        this.setState({
            house: houseService.getOne(this.props.match.params.id)
        })
    }

    render() {
        const { house, toRemove, toUpdate } = this.state;
        return <Container>
            <Button variant="outline-primary" style={{ margin: '10px 0' }} onClick={() => this.props.history.push("/houses")}>
                Back to List
            </Button>

            {house == undefined &&
                <Alert variant="danger">Erro, house undefined</Alert>}

            {house !== undefined ?
                <div>
                    <Jumbotron >
                        <h1>{house.title}</h1>
                        <h5>{house._id}</h5>
                        <Row>
                            <Col xs={4} md={3} lg={2}><Badge variant="secondary">Category</Badge></Col>
                            <Col xs={8} md={9} lg={10}>{house.category}</Col>
                        </Row>
                        <Row>
                            <Col xs={4} md={3} lg={2}><Badge variant="secondary">Publish Year</Badge></Col>
                            <Col xs={8} md={9} lg={10}>{house.publish_year}</Col>
                        </Row>
                        <Row>
                            <Col xs={4} md={3} lg={2}><Badge variant="secondary">Author</Badge></Col>
                            <Col xs={8} md={9} lg={10}>{house.author}</Col>
                        </Row>
                        <Row>
                            <Col xs={4} md={3} lg={2}><Badge variant="secondary">Description</Badge></Col>
                            <Col xs={8} md={9} lg={10}>{house.description}</Col>
                        </Row>
                        <br></br>
                        <p>
                            <Button variant="dark" onClick={() => this.setState({ toUpdate: true })}>Update</Button>&nbsp;&nbsp;
                            <Button variant="danger" onClick={() => this.setState({ toRemove: true })}>Delete</Button>
                        </p>
                    </Jumbotron>

                    {/* <UpdateDialogComponent 
                        house={house}
                        show={toUpdate}
                        handleClose={() => this.setState({toUpdate: false})}
                        submited={updateHouse => this.setState({ house: updateHouse, toUpdate: false})}
                    /> */}

                    <RemoveDialogComponent
                        houseId={house._id}
                        show={toRemove}
                        handleClose={() => this.setState({ toRemove: false })}
                        removed={() => this.props.history.push('/houses')}
                    />


                </div>

                : <span className="sr-only">Loading...</span>
            }
        </Container>

    }
}

export default HouseDetails;