import { useCartContext } from "../../context/CartContext";
import FormOrder from "../formOrder/FormOrder";
import './Checkout.css'

const Checkout = ({ generateOrder, dataForm, handleOnChange, emailConfirm }) => {

    const { removeCart, totalPrice } = useCartContext()

    return (
        <div className="checkout">
            <div className='cartTotal'>
                <span className='me-4 fw-semibold'>Total</span>
                <span className='fw-semibold'>${totalPrice}</span>
            </div>
            <button className='d-block btn btn-outline-danger mt-3' onClick={removeCart}> Vaciar carrito </button>

            <FormOrder generateOrder={generateOrder} dataForm={dataForm} handleOnChange={handleOnChange} emailConfirm={emailConfirm} />
        </div>
    )
}

export default Checkout