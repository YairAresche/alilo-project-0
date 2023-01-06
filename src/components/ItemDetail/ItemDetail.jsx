import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import ButtonCart from "../ButtonCart/ButtonCart";

import "./ItemDetail.css";
import { doc, getFirestore, updateDoc } from "firebase/firestore";

const ItemDetail = ({ producto }) => {
    const { addToCart } = useCartContext()
    const [inputType, setInputType] = useState("button");

    const [quantity, setQuantity] = useState(0)
    // const {cartList} = useCartContext()

    const onAdd = (quantity) => {
        setQuantity(quantity)
        setInputType("input");
        addToCart({ ...producto, quantity })
    }

    

    return (
        <>
            < div className='itemDetail' >
                <img src={producto.img} alt={producto.name} />
                <div className="details">
                    <h6>{producto.category} -</h6>
                    <h2>{producto.name}</h2>
                    <p className='fs-3' >${producto.price}</p>
                    <p>{producto.description}</p>
                    {
                        inputType === 'button' ? <ItemCount stock={producto.stock - quantity } initial={1} onAdd={onAdd} />
                            :
                            <ButtonCart />
                    }
                </div>
            </div >
        </>
    );
};

export default ItemDetail;