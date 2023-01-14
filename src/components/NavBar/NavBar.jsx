import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BrandAlilo from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css'

function NavBar() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryActive = query(queryCollection, where('isActive', '==', true))
        getDocs(queryActive)
            .then(resp => resp.docs.map(product => product.data().category)) // traigo las categorias de los productos activos
            .then(resp => resp.filter((category, idx) => {
                return resp.indexOf(category) === idx;
                // filtrado para que no se repitan las categorias por cada producto con misma categoria
            }))
            .then(resp => setCategories(resp))
    }, [])

    return (
        <Navbar collapseOnSelect className='fixed-top' expand="sm" bg="white" variant="white">
            <Container>
                <Navbar.Brand as={Link} to='/' className='py-0' href="#home">
                    <BrandAlilo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            {
                                categories.map((category, i) =>
                                    <NavDropdown.Item as={NavLink} to={`/categoria/${category}`} key={i}>
                                        {category}
                                    </NavDropdown.Item>)

                            }
                        </NavDropdown>
                        <Nav.Link as={NavLink} to='/sobreMi'>Sobre Mi</Nav.Link>
                        <Nav.Link as={NavLink} to='/FAQ'>Preguntas Frecuentes</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to='/cart'>
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;