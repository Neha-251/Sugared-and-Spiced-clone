import axios from "axios";
import { useContext, useState } from "react";
import { userContext } from "../Context/userContext";
import { Modal } from "../Modal";



export const FoodQty = ({foodName, foodQty }) => {

    const {userId, refreshCart, setRefreshCart} = useContext(userContext)
    const [loading, setLoading] = useState(false);
    const [qty, setQty] = useState(foodQty);


    const handleIncQty = () => {
        setLoading(true)
        qty < 20 && setQty(prev => prev + 1)
        setLoading(false)
        // let newQty = foodQty + 1;
        // let data = { 
        //     qty : newQty
        // }
        // console.log('data', data)
        // console.log('foodName', foodName)
        // axios.patch(`https://sugared-spiced-clone.herokuapp.com/carts/edit/products/qty?userId=${userId}&foodName=${foodName}`, JSON.stringify(data))
        // .then((res)=> {console.log(res.data); setLoading(false); setRefreshCart(true)}).catch(err=> console.log('err', err))
    }

    const handleDecQty = () => {
        setLoading(true)
        qty > 1 && setQty(prev => prev - 1)
        setLoading(false)
        // let newQty = foodQty - 1;
        // let data = {
        //     qty : newQty
        // }
        // console.log('data', data)
        // console.log('foodName', foodName)
        // axios.patch(`https://sugared-spiced-clone.herokuapp.com/carts/edit/products/qty?userId=${userId}&foodName=${foodName}`, JSON.stringify(data))
        // .then((res)=> {console.log(res.data); setLoading(false); setRefreshCart(true)}).catch(err=> console.log('err', err))
    }


    return (
        <div className='flex w-44 my-5 border-red-500 border-2 py-0.5 px-2 gap-2'>
            {loading && <Modal />}
            <div className='text-2xl text-white mx-0.5 cursor-pointer bg-red-600 py-0 rounded-3xl px-2' onClick={() => handleDecQty()}>−</div>
            <div className='text-xl mx-0.5 w-full'>Qty: {qty}</div>
            <div className='text-2xl text-white mx-0.5 cursor-pointer bg-red-600 py-0 rounded-3xl px-2' onClick={() => handleIncQty()}>+</div>
        </div>
    )
}