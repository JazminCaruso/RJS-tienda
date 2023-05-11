/*import './Navbar.scss'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/aprender-en-linea.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

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
                <Link to='/category/programacion' className="navbar__link"><NavDropdown.Item href="#programacion">Programación</NavDropdown.Item></Link>
                    <NavDropdown.Item href="#marketing-digital">Marketing digital</NavDropdown.Item>
                    <NavDropdown.Item href="#diseño-digital">Diseño digital</NavDropdown.Item>
                    <NavDropdown.Item href="#idiomas">Idiomas</NavDropdown.Item>
                    <NavDropdown.Item href="#herramientas">Herramientas</NavDropdown.Item>
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

export default CollapsibleExample;*/

import './Navbar.scss'
import logo from '../../assets/aprender-en-linea.png';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const CollapsibleExample = () => {

    return (
        <header className="header">
            <div className="header__container">
            <div className='nosotros'>
            <Link to='/' className="brand"><img className="logo" src={logo} alt='LOGO'/>E-ducacion</Link>
            </div>
                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio  |</Link>
                    <Link to='/category/programacion' className="navbar__link">Programación</Link>
                    <Link to='/category/marketing' className="navbar__link">Marketing</Link>
                    <Link to='/category/diseño' className="navbar__link">Diseño</Link>
                    <Link to='/category/idiomas' className="navbar__link">Idiomas</Link>
                    <Link to='/category/herramientas' className="navbar__link">Herramientas</Link>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default CollapsibleExample;