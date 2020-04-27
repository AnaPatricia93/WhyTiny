import React from 'react';
import '../General.css';
import { Container, Table, Button } from 'react-bootstrap';
import houseService from '../../services/houses';
import { InfoCircle } from 'react-bootstrap-icons';
import UpdateDialogComponent from '../../components/UpdateDialog'
class Houses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: [],
            toCreate: false
        }
    }

    componentDidMount() {
        this.setState({
            houses: houseService.getAll()
        })
    }

    render() {
        const { houses } = this.state;

        return <div className="background">

            <Container>

                <Button variant="outline-primary" style={{ margin: '10px 0' }} onClick={() => this.setState({ toCreate: true })}>Add House</Button>

                <UpdateDialogComponent 
                        show={toCreate}
                        handleClose={() => this.setState({toCreate: false})}
                        submited={createHouse => this.setState({ houses: [...houses, createdHouse], toCreate: false})}
                    />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>House</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {houses.map((house, index) => (
                            <tr key={index}>
                                <td>{house.title}</td>
                                <td>{house.description}</td>
                                <td>
                                    <Button onClick={() => this.props.history.push(`/houses/details/${house._id}`)}>
                                        <InfoCircle />
                                    </Button>
                                </td>

                            </tr>))}
                    </tbody>
                </Table>
            </Container>


        </div>
    }
}

export default Houses;