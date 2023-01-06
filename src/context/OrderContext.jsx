import { createContext, useContext, useState } from "react";

const OrderContext = createContext([]);
export const useOrderContext = () => useContext(OrderContext);

export const OrderContextProvider = ({ children }) => {

    

    return (
        <OrderContext.Provider value={{
            
        }}>
            {children}
        </OrderContext.Provider>
    )
}