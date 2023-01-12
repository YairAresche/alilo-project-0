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

const getQuantityItem = (id) => {
    const data = cartList.find(product => product.id === id)
    if (data) {
        return data.quantity
    } else {
        return 0
    }
}

const removeCart = () => {
    setCartList([])
}

const addProduct = (id) => {
    const data = cartList.find(product => product.id === id)
    console.log(data)
    if (data.quantity < data.stock) {
        data.quantity += 1
        setCartList([...cartList])
    } else {
        return 0
    }
}

const removeProduct = (id) => {
    const data = cartList.find(product => product.id === id)
    console.log(data)
    if (data.quantity > 1) {
        data.quantity -= 1
        setCartList([...cartList])
    } else {
        return 0
    }
}

return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        removeCart,
        totalAmount,
        totalPrice,
        itemDelete,
        getQuantityItem,
        addProduct,
        removeProduct
    }}>
        {children}
    </CartContext.Provider>
)
}