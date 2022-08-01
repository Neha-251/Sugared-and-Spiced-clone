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

    useEffect(() => {
        let id = localStorage.getItem("userId")
        if (id !== '') {
            setUserId(id)
        }
    }, [])

    useEffect(() => {

        axios.get(`https://sugared-spiced-clone.herokuapp.com/carts/getone?user_id=${userId}`)
            .then(res => {
                console.log('cartdata', res.data.order);
                if (res.data.order === null) {
                    setIsCart(false)
                } else {
                    console.log("fetching, adding data")
                    setCartData(res.data.order.products)
                }
            })

    }, [userId])
    console.log('userId', userId)

    useEffect(() => {
        if (!isCart) {

            if (userId !== '') {
                let data = {
                    
                    user: userId,
                    products: []
                }
                console.log('data', data)
                axios.post('https://sugared-spiced-clone.herokuapp.com/carts/create', data)
                    .then(res => setCartData(res.data.order.products))
                    .catch(alert("Something Went Wrong, Please Login again"))
            }
        }
    }, [isCart])

    return <userContext.Provider value={{
        userId, setUserId, cartData, setCartData, refreshCart, setRefreshCart
    }}>{children}</userContext.Provider>
}