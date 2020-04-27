import React from 'react';
import '../General.css';
import { Container, Table, Button } from 'react-bootstrap';
import houseService from '../../services/houses';
import { InfoCircle } from 'react-bootstrap-icons';

class Houses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: []
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