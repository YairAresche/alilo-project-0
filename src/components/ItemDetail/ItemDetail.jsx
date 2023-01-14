import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import ButtonCart from "../ButtonCart/ButtonCart";

import "./ItemDetail.css";

const ItemDetail = ({ product }) => {

    const { addToCart, getQuantityItem } = useCartContext()
    const [inputType, setInputType] = useState("button");

    const onAdd = (quantity) => {
        setInputType("input");
        addToCart({ ...product, quantity }) // quantity = , quantity: quantity
    }
    
    return (
        <>
            <Link to="/productos" className="text-decoration-none"> Volver a productos </Link>
            < div className='itemDetail mt-4' >
                <img src={product.img} alt={product.name} />
                <div className="details">
                    <h5>{product.category} -</h5>
                    <h2>{product.name}</h2>
                    <p className='fs-3' >${product.price}</p>
                    <p>{product.description}</p>
                    {
                        inputType === 'button' ? <ItemCount stock={product.stock - getQuantityItem(product.id) } initial={1} onAdd={onAdd} />
                            :
                            <ButtonCart />
                    }
                </div>
            </div >
        </>
    );
};

export default ItemDetail;