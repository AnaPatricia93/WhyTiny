import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Home from '../pages/home/Home';

class MenuComponent extends React.Component {

    render() {
        return (
            <Nav defaultActiveKey="/home" className="flex-column sidenav">
                <Nav.Link href="/">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
            </Nav>
        )
    }
}

export default MenuComponent;