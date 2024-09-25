import React from 'react'
import './Menu.css'
import { Container, Nav, Navbar, NavbarToggle,} from 'react-bootstrap'

const Menu = () => {
  return (
    <header className="header">
              <Navbar expand="lg" className="navbar">
                <Container className='header__nav'>
                  <Navbar.Brand href="#home" className='header__logo'>
                    <img src="../../../public/img/Logos/manglarNombre.png" alt="Logo Manglar" />
                  </Navbar.Brand>
                  <Navbar.Toggle  className='navbar-toggler' />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto header__nav">
                      <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
                      <Nav.Link href="#link" className='nav-item'>Arquitectura</Nav.Link>
                      <Nav.Link href="#link" className='nav-item'>Nosotros</Nav.Link>
                      <Nav.Link href="#link" className='nav-item'>Filosofía</Nav.Link>
                      <Nav.Link href="#link" className='nav-item'>Contacto</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
    </header>
  )
}

export default Menu