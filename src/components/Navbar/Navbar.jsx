import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/aprender-en-linea.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

function CollapsibleExample() {

    const { user, logout } = useContext(AuthContext)

  return (
    <Navbar collapseOnSelect expand="lg">
        <Container className='navbar'>
            <Navbar.Brand>
                <Link to='/' className="brand"><img className="logo" src={logo} alt='LOGO'/>E-ducacion</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                    <Link to='/categories/programacion' className="navbar__link"><NavDropdown.Item href="#programacion">Programación</NavDropdown.Item></Link>
                    <Link to='/categories/marketing' className="navbar__link"><NavDropdown.Item href="#marketing-digital">Marketing digital</NavDropdown.Item></Link>
                    <Link to='/categories/diseño' className="navbar__link"><NavDropdown.Item href="#diseño-digital">Diseño digital</NavDropdown.Item></Link>
                    <Link to='/categories/idiomas' className="navbar__link"><NavDropdown.Item href="#idiomas">Idiomas</NavDropdown.Item></Link>
                    <Link to='/categories/herramientas' className="navbar__link"><NavDropdown.Item href="#herramientas">Herramientas</NavDropdown.Item></Link>
                    </NavDropdown>
                    <Link to='/informacion' className="navbar__link"><Nav.Link href="#informacion">Información</Nav.Link></Link>
            </Nav>
            {
                user.logged 
                    ? <Nav>
                        <button className='btn' onClick={logout}>Cerrar sesión</button>
                      </Nav>
                    : <Nav>
                        <Link to='/login' className="itemNavbar"><button className='btn'>Iniciar sesión</button></Link>
                      </Nav>
            }
            <Nav>
                <Nav.Link eventKey={2}><CartWidget/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
