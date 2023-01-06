import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Item.css'
import { BsSearch } from 'react-icons/bs';

const Item = memo(({ id, name, category, price, img }) => {

    return (
        <Nav.Link as={Link} to={`/detalles/${id}`}>
            <Card className='cardProduct mb-5 mb-sm-4 mb-md-0'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <b>{name}</b> - {category}
                    </Card.Title>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        Precio: ${price}
                    </Card.Text>
                    <Button className='d-flex align-items-center'> <BsSearch className='me-2' /> Detalles del producto</Button>
                </Card.Body>
            </Card>
        </Nav.Link>
    )
})

export default Item