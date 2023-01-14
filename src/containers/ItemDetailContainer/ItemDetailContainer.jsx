import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Container } from 'react-bootstrap';
import Loader from '../../components/Loader/Loader';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productId)
        getDoc(queryDoc)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <Container className='itemDetailContainer'>
            {loading ? <Loader /> : <ItemDetail product={product} />}
        </Container>
    )
}

export default ItemDetailContainer