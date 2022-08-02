import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/userContext";
import { Modal } from "../Modal";



export const FoodQty = ({ data }) => {

    const { cartData, setRefreshCart, loading, setLoading } = useContext(userContext)

    const [prodQty, setProdQty] = useState(data.qty)

    useEffect(()=> {
        setRefreshCart(true)
        setLoading(true);

    }, [prodQty])

    useEffect(()=> {
        setLoading(true);
        cartData.forEach((el) => {
            if(el.name === data.name) {
                let obj = el;
                obj.qty = prodQty;
                el = obj;
            }
        })

        setLoading(false)

    }, [prodQty])


    return (
        <div className='flex w-44 my-5 border-red-500 border-2 py-0.5 px-2 gap-2'>
            {loading&& <Modal></Modal>}
            <div className='text-2xl text-white mx-0.5 cursor-pointer bg-red-600 py-0 rounded-3xl px-2' onClick={() => prodQty > 1 && setProdQty(prev => prev - 1)}>−</div>
            <div className='text-xl mx-0.5 w-full'>Qty: {prodQty}</div>
            <div className='text-2xl text-white mx-0.5 cursor-pointer bg-red-600 py-0 rounded-3xl px-2' onClick={() => prodQty < 50 && setProdQty(prev => prev + 1)}>+</div>
        </div>
    )
}