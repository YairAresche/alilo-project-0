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
                    loading ? <Loader /> : <ItemList productos={products} />
                }
            </Container>
        </>
    )
}

export default ItemListContainer



















// if (categoriaId) { // Trae filtrados
        //     const db = getFirestore()
        //     const queryCollection = collection(db, 'productos')
        //     const queryfilter = query(queryCollection, where('category', '==', categoriaId))
        //     getDocs(queryfilter) // Promesa que trae la colección de firestore
        //         .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() })))) //fx data para extraer los datos dentro del id
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        // } else { // Trae todos
        //     const db = getFirestore() // Extraigo la base de datos con la FX getFirestore
        //     const queryCollection = collection(db, 'productos')
        //     getDocs(queryCollection)
        //         .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        // }




    // useEffect( ()=>{ // se carga despues de renderizar por primera vez(montaje)
    //     if (categoriaId) {
    //             gFetch()
    //             .then( resp => setProducts(resp.filter( product => product.category === categoriaId ) ) )
    //             // me filtra todos los productos que coincidan la categoría
    //             .catch( err => console.log(err) )
    //             .finally( ()=> setLoading(false) )
    //     } else{
    //             gFetch()
    //             .then( resp => setProducts(resp) )
    //             .catch( err => console.log(err) )
    //             .finally( ()=> setLoading(false) )
    //     }
    // }, [categoriaId] ) // Cuando cambie categoriaId, useEffect detecta el cambio y re-renderiza para que impacte el filtrado
    // Con el array de dependencias(*) vacío hago que se ejecute lo que está dentro del useEffect sólo una vez luego del montaje. Se usa para las llamadas a las Apis.
    //(*) useEffect depende de lo que hay dentro de este array para volverse a ejecutar. Como está vacío no se vuelve a ejecutar. 