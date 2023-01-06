import { Container, Spinner } from 'react-bootstrap'

const Loader = () => {
    
    return (
        <Container className='d-flex justify-content-center mt-3' >
            <Spinner/>
        </Container>
    )
}

export default Loader