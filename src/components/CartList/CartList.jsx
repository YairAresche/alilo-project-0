import { useCartContext } from "../../context/CartContext"


const CartList = ( ) => {

    const { cartList, itemDelete, addProduct, removeProduct, totalAmount } = useCartContext();

    return (
        <div>
            <h4>Carrito ({totalAmount}) </h4>
            {
                cartList.map((product) => {
                    return (<li className='d-flex' key={product.id}>

                        <span>
                            <img className='me-2' src={product.img} alt={product.name} />
                            {product.category.slice(0, product.category.length - 1)} {product.name}
                        </span>

                        <span className='d-flex align-items-center gap-1 gap-sm-2 px-md-3'>
                            <span className='d-flex changeStock'>
                                <button className='btn p-0 me-2' onClick={() => removeProduct(product.id)}>-</button>
                                <span>{product.quantity} u.</span>
                                <button className='btn p-0 ms-2' onClick={() => addProduct(product.id)}>+</button>
                            </span>
                            <span>${product.price * product.quantity}</span>
                            <span className='btn text-danger fw-bold py-0' onClick={() => itemDelete(product.id)}>Eliminar</span>
                        </span>

                    </li>)
                })
            }
        </div>
    )
}

export default CartList