import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock = 1, initial = 1, onAdd }) => {

    const [count, setCount] = useState(initial)
    // const [stockAvailable, setStockAvailable] = useState(stock)

    const handlerAdd = () => {
        if (count < stock)
            setCount(count + 1)
        // setStockAvailable(stock - count)

    }
    const handlerRemove = () => {
        if (count > initial)
            setCount(count - 1)
    }

    const handlerOnAdd = () => onAdd(count)

    return (
        <>
            {
                stock ?
                    <div>
                        <button className="btn btn-secondary me-2" onClick={handlerAdd}>+</button>
                        <span>{count}</span>
                        <button className="btn btn-secondary ms-2" onClick={handlerRemove}>-</button>
                        <button className="btn btn-alilo ms-4 me-2" onClick={handlerOnAdd}>Agregar al carrito!</button>
                        <span>({stock} Disponibles)</span>
                    </div>
                    :
                    <span>No quedan productos</span>
            }
        </>
    )
}

export default ItemCount

// {
//     !stock ? <span>No quedan productos</span> : (<span>{stock} Disponibles </span>)
// }