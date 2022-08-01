import { useContext } from 'react';
import { FloatHeader } from '../Header/FloatHeader';
import { userContext } from '../Context/userContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '../Modal';
import { FoodQty } from './FoodQty';
import { RemoveFood } from './RemoveFood';


export const Cart = () => {

    const { userId, cartData, setCartData, refreshCart, setRefreshCart } = useContext(userContext);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (userId !== '') {
            axios.get(`https://sugared-spiced-clone.herokuapp.com/carts/getone?user_id=${userId}`)
                .then(res => {console.log(res.data); setCartData(res.data.order.products); setLoading(false); setRefreshCart(false)})
        }

    }, [refreshCart])

    const handleRemove = (i) => {
        let data = [...cartData];

        data.splice(i, 1)
    }
   

    return (
        <>
            <FloatHeader display={true} />
            <div className='flex my-32 p-6'>
                <div className='border-2 p-8 ml-36 w-7/12 border-red-400 '>
                { loading && <Modal />}

                    {
                        cartData.map((el) => {
                            return (
                                <div key={el._id} className='flex gap-2'>
                                    <div className="w-84 h-64 rounded-md overflow-hidden">
                                            <img src={el.image} className='object-cover rounded-md h-full w-full' alt='img' />
                                        </div>
                                    <div>
                                        <p className='text-2xl'>{el.name}</p>
                                        <p className='flex text-xl gap-4'>
                                            <p>{el.price}</p>
                                            <p>{el.description}</p>
                                        </p>
                                        <FoodQty foodName={el.name} foodQty={el.qty} />
                                        {/* <RemoveFood foodName={el.name} /> */}
                                        <button onClick={()=> handleRemove()} className='h-12 border-2 bg-red-500 text-xl text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-6 py-2'>Remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='w-72 py-5 px-4 fixed right-28 top-28 shadow-xl shadow-gray-800 h-96'>
                    <div className='text-3xl text-center mb-8'><p>Cart</p></div>
                    <div className='text-lg justify-between mb-2'><p>Items</p> <p>{cartData.length}</p></div>
                    <div className='text-lg justify-between mb-2'><p>SubTotal</p> <p></p></div>
                    <div className='text-lg justify-between mb-2'><p>Tax(5%)</p><p></p></div>
                    <div className='text-lg justify-between mb-4'><p>Delivery Charge</p><p></p></div>

                    <hr />
                    <div className='text-2xl justify-between mt-4 mb-6'><p>Total</p><p></p></div>
                    <button className='h-10 ml-6 border-2 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1'>
                        Proceed to Payment
                    </button>

                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}