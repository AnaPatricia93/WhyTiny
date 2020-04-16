import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import MenuComponent from './Menu';



class RouterComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuShow: false,
            isLogged: false,
            btnMsg: 'Log In'
        }

        this.alterMenuState = this.alterMenuState.bind(this);
        this.alterLog = this.alterLog.bind(this);
    }

    alterMenuState = () => {
        this.setState(prevState => ({
            menuShow: !prevState.menuShow
        }))
    }


    alterLog() {
        this.setState(
            prevState => {
                return {
                    btnMsg: prevState.isLogged ? 'Log In' : 'Log Out',
                    isLogged: !prevState.isLogged
                }
            }
        )
    }


    render() {
        return (
            <Router>
                <Navbar fixed="top" bg="light" expand="lg">
                    <Nav.Link onClick={this.alterMenuState} >Menu</Nav.Link>
                    <Navbar.Brand className="navbar-brand" href="/">MyWebsite</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link className="ml-right" type="submit">Submit</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {this.state.isLogged && <a href="#login">Name</a>}
                            &nbsp;&nbsp; <Button onClick={this.alterLog} variant="outline-info">{this.state.btnMsg}</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Navbar>

                {this.state.menuShow && <MenuComponent />}

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterComponent;