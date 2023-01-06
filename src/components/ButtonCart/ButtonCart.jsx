import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ButtonCart.css'

const ButtonCart = () => {
    return (
        <div className='d-flex'>
            <Nav.Link as={Link} to='/productos'>
                <button className='btn btn-outline-alilo me-2'>Continuar comprando</button>
            </Nav.Link>

            <Nav.Link as={Link} to='/cart'>
                <button className='btn btn-outline-alilo'>Ver el carrito</button>
            </Nav.Link>
        </div>
    )
}

export default ButtonCart