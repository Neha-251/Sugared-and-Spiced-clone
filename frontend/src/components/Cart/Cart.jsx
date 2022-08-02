import { useContext } from 'react';
import { FloatHeader } from '../Header/FloatHeader';
import { userContext } from '../Context/userContext';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { FoodQty } from './FoodQty';
import { CartSideBar } from './CartSideBar';


export const Cart = () => {

    const { cartData, setCartData, loading, setLoading } = useContext(userContext);

   
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

    return (
        <>
            <FloatHeader display={true} />
            <div className='flex my-32 px-6 '>
                <div className='border-2 p-8 ml-36 w-7/12 border-neutral-400 '>
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

                <CartSideBar/>
            </div>
        </>
    )
}