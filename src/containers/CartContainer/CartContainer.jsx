import { useState } from 'react'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { useCartContext } from '../../context/CartContext'
import Container from 'react-bootstrap/esm/Container'

import Checkout from '../../components/Checkout/Checkout'
import GoHome from '../../components/GoHome/GoHome'
import CartList from '../../components/CartList/CartList'

import './CartContainer.css'

const CartContainer = () => {

    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        emailConfirm: "",
        phone: ""
    })

    const [emailConfirm, setEmailConfirm] = useState(false);
    const [orderId, setOrderId] = useState();
    const { cartList, removeCart, totalPrice, totalAmount } = useCartContext()

    const generateOrder = (e) => {
        e.preventDefault()

        const order = {
            buyer: dataForm,
            item: cartList.map(({ id, name, price }) => ({ id, name, price })),
            total: totalPrice
        }

        if (dataForm.email === dataForm.emailConfirm) {
            const db = getFirestore()
            const queryOrder = collection(db, 'orders');
            addDoc(queryOrder, order)
                .then(resp => setOrderId(resp.id))
                .catch(err => console.log(err))
                .finally(() => {
                    removeCart()
                    setDataForm({ name: "", email: "", emailConfirm: "", phone: "" })
                })

            cartList.forEach(product => {
                const queryUpdate = doc(db, 'productos', product.id)
                updateDoc(queryUpdate, {
                    stock: product.stock - product.quantity
                })
                    .catch(err => console.log(err))
            });
        } else setEmailConfirm(true) // Si son distintos arroja error en el form
    }

    const handleOnChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container className='cartContainer mt-5 mb-5'>

            <div>
                <CartList />
                {
                    totalAmount ? // Si hay productos agregados al carrito...
                        <>
                            <Checkout generateOrder={generateOrder} dataForm={dataForm} handleOnChange={handleOnChange} orderId={orderId} emailConfirm={emailConfirm} />
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