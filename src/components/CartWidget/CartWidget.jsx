import { useCartContext } from "../../context/CartContext"
import { BsCart2 } from "react-icons/bs";

import './CartWidget.css'

const CartWidget = () => {

    const { cartList, totalAmount, totalPrice } = useCartContext()

    return (
        <>
            {
                cartList.length ?
                    <span className='d-md-flex align-items-md-center position-relative'>
                        <span className="badge">{totalAmount}</span>  {<BsCart2 size={30} className='me-3' />}
                        <span className="bg-alilo position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            ${totalPrice}
                        </span>
                    </span>
                    : <span> <BsCart2 size={24} /> </span>
            }
        </>
    )
}

export default CartWidget