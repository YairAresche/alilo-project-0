import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import ButtonCart from "../ButtonCart/ButtonCart";

import "./ItemDetail.css";
// import { doc, getFirestore, updateDoc } from "firebase/firestore";

const ItemDetail = ({ producto }) => {

    const { addToCart, getQuantityItem } = useCartContext()
    const [inputType, setInputType] = useState("button");

    const onAdd = (quantity) => {
        setInputType("input");
        addToCart({ ...producto, quantity }) // quantity = , quantity: quantity
    }
    
    return (
        <>
            <Link to="/productos" className="text-decoration-none"> Volver a productos </Link>
            < div className='itemDetail mt-4' >
                <img src={producto.img} alt={producto.name} />
                <div className="details">
                    <h5>{producto.category} -</h5>
                    <h2>{producto.name}</h2>
                    <p className='fs-3' >${producto.price}</p>
                    <p>{producto.description}</p>
                    {
                        inputType === 'button' ? <ItemCount stock={producto.stock - getQuantityItem(producto.id) } initial={1} onAdd={onAdd} />
                            :
                            <ButtonCart />
                    }
                </div>
            </div >
        </>
    );
};

export default ItemDetail;