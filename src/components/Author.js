import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';


export default class AuthorComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            isAvailable: true
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    switchAvailability(e) {
        this.setState(state => ({
            isAvailable: !state.isAvailable
        }));
    }

    render() {
        return (
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        <Button size="sm" variant="primary" onClick={e => this.switchAvailability(e)}>Switch availability</Button>
                        <br />
                        {this.state.isAvailable
                            ? <Badge variant="success">Available</Badge>
                            : <Badge variant="danger">Unavailable</Badge>}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                        {this.props.info.work}
                    </Card.Subtitle>
                    <Card.Text>
                        {this.state.date.toLocaleTimeString()}
                        <br />
                        {this.props.info.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
