import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">SmartKeys</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Início</Nav.Link>
                            <Nav.Link href="#services">Serviços</Nav.Link>
                            <Nav.Link href="#contact">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar