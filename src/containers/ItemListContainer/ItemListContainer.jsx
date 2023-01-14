import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Container from "react-bootstrap/esm/Container"
import ItemList from "../../components/ItemList/ItemList"
import Loader from "../../components/Loader/Loader"

import './ItemListContainer.css'

const ItemListContainer = () => {

    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

        const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            const queryActive = query(queryCollection, where('isActive', '==', true))
            const queryFilter = categoryId ?  query(queryCollection, where('category', '==', categoryId)) : queryActive
            getDocs(queryFilter) // Promesa que trae la colección de firestore
                .then(resp => {
                    setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() })))
                }) //data() extrae los datos dentro del id
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <>
            <Container className='itemListContainer '>
                <h3>Productos</h3>
                {
                    loading ? <Loader /> : <ItemList products={products} />
                }
            </Container>
        </>
    )
}

export default ItemListContainer