import './Navbar.scss'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/aprender-en-linea.png';
import CartWidget from '../CartWidget/CartWidget';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img className="logo" src={logo} alt='LOGO'/>
                E-ducación
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#herramientas-office">Herramientas de Office</NavDropdown.Item>
                    <NavDropdown.Item href="#nuevas-tecnologias">Nuevas tecnologías</NavDropdown.Item>
                    <NavDropdown.Item href="#marketing-digital">Marketing Digital</NavDropdown.Item>
                    <NavDropdown.Item href="#inversiones-finanzas">Inversiones y finanzas</NavDropdown.Item>
                    <NavDropdown.Item href="#administracin-contable">Administración contable</NavDropdown.Item>
                    <NavDropdown.Item href="#blockchain">Blockchain</NavDropdown.Item>
                    <NavDropdown.Item href="#logistica">Logística</NavDropdown.Item>
                    <NavDropdown.Item href="#idiomas">Idiomas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#favoritos">Favoritos</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                
            </Nav>
            <Nav>
                <Nav.Link href="#iniciarSesion">Iniciar sesión</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link eventKey={2} href="#carrito"><CartWidget/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default CollapsibleExample;