import { useContext } from 'react';
import { FloatHeader } from '../Header/FloatHeader';
import { userContext } from '../Context/userContext';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { FoodQty } from './FoodQty';


export const Cart = () => {

    const { userId, cartData, setCartData } = useContext(userContext);
    console.log('cartData', cartData)
    const [loading, setLoading] = useState(false);

   
    const handleRemove = (i) => {
        setLoading(true)
        console.log('i', i)
        let data = cartData;

        data.splice(i, 1)
        setCartData(data);

    }

    useEffect(()=> {
        setLoading(false)
    }, [cartData.length])

    useEffect(()=> {
        
    }, [cartData])
   

    return (
        <>
            <FloatHeader display={true} />
            <div className='flex my-32 p-6 '>
                <div className='border-2 p-8 ml-36  w-7/12 border-red-400 '>
                { loading && <Modal />}

                    {
                        cartData.map((el) => {
                            return (
                                <div key={el._id} className='flex mb-12 gap-20'>
                                    <div className="w-72 h-48 rounded-md overflow-hidden">
                                            <img src={el.image} className='rounded-md h-full w-fit max-w-fit' alt='img' />
                                        </div>
                                    <div>
                                        <p className='text-2xl'>{el.name}</p>
                                        <p className='flex text-xl gap-4'>
                                            <p>{el.price} Rs</p>
                                            <p>{el.description}</p>
                                        </p>
                                        <FoodQty data={el} />
                                        <button onClick={()=> handleRemove()} className='h-12 border-2 bg-red-500 text-xl text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-6 py-2'>Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='w-72 py-5 px-4 fixed right-28 top-28 shadow-xl shadow-gray-800 h-96'>
                    <div className='text-3xl text-center mb-8'><p>Cart</p></div>
                    <div className='text-lg justify-between mb-2 flex'><p>Items</p> <p>{cartData.length}</p></div>
                    <div className='text-lg justify-between mb-2 flex'><p>SubTotal</p> <p></p></div>
                    <div className='text-lg justify-between mb-2 flex'><p>Tax(5%)</p><p></p></div>
                    <div className='text-lg justify-between mb-4 flex'><p>Delivery Charge</p><p></p></div>

                    <hr />
                    <div className='text-2xl justify-between mt-4 mb-6 flex'><p>Total</p><p></p></div>
                    <button className='h-10 ml-6 border-2 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1'>
                        Proceed to Payment
                    </button>

                </div>
            </div>
        </>
    )
}