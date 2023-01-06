import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GoHome = () => {
    return (
        <NavLink as={Link} to='/' >
            <button className='btn btn-outline-alilo'> Volver a inicio </button>
        </NavLink>
    )
}

export default GoHome