import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

export default class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand className="navbar-brand" href="/">WhyTiny</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-info">Log In</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
