import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import MenuComponent from './Menu';
import Description from '../pages/description/Desc.js';
import Houses from '../pages/houses/Houses.js';
import HouseDetails from '../pages/houses/Details';


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
                    <Nav.Link onClick={this.alterMenuState} ><List size={25}/></Nav.Link>
                    <Navbar.Brand className="brand bluecolor" href="/">WhyTiny</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/description">About Us</Nav.Link>
                            <Nav.Link href="/houses">Houses</Nav.Link>
                            <Nav.Link href="/about">Creator</Nav.Link>
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
                    <Route exact path="/" component={Home} />
                    <Route exact path="/houses" component={Houses} />
                    <Route exact path="/houses/details/:id" component={HouseDetails} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/description" component={Description} />
                </Switch>
            </Router>
        )
    }
}

export default RouterComponent;