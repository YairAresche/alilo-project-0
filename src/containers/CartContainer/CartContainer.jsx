import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { NavLink } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

import Container from 'react-bootstrap/esm/Container'

import './CartContainer.css'
import Checkout from '../../components/Checkout/Checkout'
import GoHome from '../../components/GoHome/GoHome'

const CartContainer = () => {

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        emailConfirm: "",
        phone: ""
    })

    const [emailConfirm, setEmailConfirm] = useState(false);
    const [orderId, setOrderId] = useState();
    const { cartList, removeCart, totalPrice, itemDelete, totalAmount } = useCartContext()

    const generarOrden = (e) => {
        e.preventDefault()

        const order = {
            // validaciones
            buyer: dataForm,
            item: cartList.map(({ id, name, price }) => ({ id, name, price })),
            total: totalPrice
        }

        if (dataForm.email === dataForm.emailConfirm) {
            console.log('generando orden...');
            const db = getFirestore()
            const queryOrder = collection(db, 'orders');
            addDoc(queryOrder, order)
                .then(resp => setOrderId(resp.id))
                .catch(err => console.log(err))
                .finally(() => {
                    removeCart()
                    setDataForm({ name: "", email: "", emailConfirm: "", phone: "" })
                })

            // const db = getFirestore()
        // const queryUpdate = doc(db, 'productos', producto.id)
        // updateDoc(queryUpdate, {
        //     stock: producto.stock - quantity
        // })
        // .then( ()=> console.log('Terminó la actualización...'))
        // .catch(err => console.log(err))
                
        } else setEmailConfirm(true)
    }

    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    return (
        <Container className='cartContainer mt-3'>
            <div>
                <h4>Carrito ({totalAmount}) </h4>
                {
                    cartList.map((product) =>
                        <li className='d-flex' key={product.id}>
                            <span>
                                <img className='me-2' src={product.img} alt={product.name} />
                                {product.category.slice(0, product.category.length - 1)} {product.name}
                            </span>
                            <span className='d-flex align-items-center gap-1 gap-sm-2'>
                                <span>{product.quantity}u.</span> <span>${product.price * product.quantity}</span>
                                <span className=' text-secondary-emphasis' onClick={() => itemDelete(product.id)}> x </span>
                            </span>
                        </li>)
                }
                {
                    totalAmount ? // Si hay productos agregados al carrito...
                        <>
                            <div className='cartTotal'>
                                <span className='me-4 fw-semibold'>Total</span>
                                <span className='fw-semibold'>${totalPrice}</span>
                            </div>
                            <button className='d-block btn btn-outline-danger mt-3' onClick={removeCart}> Vaciar carrito </button>

                            <Checkout generarOrden={generarOrden} dataForm={dataForm} handleOnChange={handleOnChange} orderId={orderId} emailConfirm={emailConfirm} />
                        </>
                        :
                    <Container className='text-center'>
                        { 
                            orderId ? 
                                <>
                                    <h2>Su orden de compra es: {orderId} </h2>
                                    <GoHome />
                                </>
                                : // Si no hay productos en el carrito entra acá.
                                <>
                                    <h2>NO HAY PRODUCTOS</h2>
                                    <GoHome />
                                </>
                        }
                    </Container>
                }
            </div>
        </Container>
    )
}

export default CartContainer