import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (producto) => {
        const idx = cartList.findIndex(product => product.id == producto.id)
        if (idx < 0) {
            setCartList([...cartList, producto])
        } else {
            cartList[idx].quantity += producto.quantity
            setCartList([...cartList])
        }
    }

    const totalAmount = cartList.reduce((acu, product) => {
        return acu += product.quantity;
    }, 0)

    const totalPrice = cartList.reduce((acu, product) => {
        return acu += product.price * product.quantity;
    }, 0)

    const itemDelete = (id) => setCartList(cartList.filter(product => product.id !== id))

    const removeCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart,
            totalAmount,
            totalPrice,
            itemDelete,
        }}>
            {children}
        </CartContext.Provider>
    )
}