import { useState } from "react";
import { useContext, useEffect } from "react";
import { userContext } from "../Context/userContext";



export const CartSideBar = () => {

    const { cartData, setRefreshCart, refreshCart, loading, setLoading } = useContext(userContext);

    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [delivery, setDelivery] = useState(0);
    const [tax, setTax] = useState(0);

    useEffect(()=> {
        let total = 0;
        cartData.forEach((el)=> {
            total += el.price * el.qty;
        })
        setSubTotal(total);
        
    }, [refreshCart, cartData, loading])

    useEffect(()=> {
        setTax(Math.ceil((subTotal*5)/100))

        subTotal > 0 && subTotal < 1000 && subTotal > 500 && setDelivery(50)
        subTotal > 0 && subTotal < 500 && setDelivery(80)
        subTotal > 0 && subTotal < 300 && setDelivery(120)
        subTotal === 0 && subTotal < 300 && setDelivery(0)

        
    }, [subTotal])

    useEffect(()=> {
        let tempTotal = subTotal+tax+delivery;
        setTotal(tempTotal);
        setRefreshCart(false)
        setLoading(false)
    }, [delivery, subTotal])
   

    return (
        <div className='w-72 py-5 px-4 fixed right-28 top-38 shadow-xl shadow-gray-800 h-96'>
            <div className='text-3xl text-center mb-8'><p>Cart</p></div>
            <div className='text-lg justify-between mb-2 flex'><p>Items</p> <p>{cartData.length}</p></div>
            <div className='text-lg justify-between mb-2 flex'><p>SubTotal</p> <p>{subTotal} Rs</p></div>
            <div className='text-lg justify-between mb-2 flex'><p>Tax(5%)</p><p>{tax} Rs</p></div>
            <div className='text-lg justify-between mb-4 flex'><p>Delivery Charge</p><p>{delivery} Rs</p></div>

            <hr />
            <div className='text-2xl justify-between mt-4 mb-6 flex'><p>Total</p><p>{total} Rs</p></div>
            <button className='h-10 ml-6 border-2 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1'>
                Proceed to Payment
            </button>

        </div>
    )
}