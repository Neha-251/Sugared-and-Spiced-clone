import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [isCart, setIsCart] = useState(true);
    const [cartData, setCartData] = useState([]);
    const [refreshCart, setRefreshCart] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let id = localStorage.getItem("userId")
        if (id !== '') {
            setUserId(id)
        }
    }, [])

   
    return <userContext.Provider value={{
        userId, setUserId, cartData, setCartData, loading, setLoading,
         refreshCart, setRefreshCart
    }}>{children}</userContext.Provider>
}