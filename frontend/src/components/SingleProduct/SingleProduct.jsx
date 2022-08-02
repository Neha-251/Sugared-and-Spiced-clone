import axios from 'axios';
import { debounce } from 'lodash';
import { useCallback, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from '../Context/userContext';
import { Footer } from '../Footer/Footer';
import { FloatHeader } from '../Header/FloatHeader';
import { Modal } from '../Modal';



export const SingleProduct = () => {

    const { cartData, setCartData } = useContext(userContext)

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [prodQty, setProdQty] = useState(1);
    const [isData, setIsData] = useState(false);
    const [data, setData] = useState({})
    
    useEffect(() => {
        axios.get(`https://sugared-spiced-clone.herokuapp.com/products/${id}`)
            .then(res => { setData(res.data.productdata); setLoading(false) }).catch(err => console.log(err))
    }, [])


    const handleAddtoCart = () => {
        setLoading(true);
        addToCart()
    }

    useEffect(() => {
        cartData.forEach((el) => {
            if (data.name === el.name) {
                console.log('checkinig')
                setIsData(true)
            }
        })
    }, [cartData, data])

    const addToCart = debounce(() => {
        if (!isData) {
            let newData = {
                name: data.name,
                image: data.image,
                description: data.description,
                price: data.price,
                qty: prodQty

            }

            let newCartData = cartData;
            newCartData.push(newData)
            setIsData(true)
            setCartData(newCartData)
            setLoading(false)

        } else {
            setLoading(false)
        }

    }, 5000)


    return (
        <>
            <FloatHeader display={true} />
            {loading && <Modal />}
            <div className="flex p-24 w-3/4 gap-6 h-fit m-auto">
                <div className='w-full h-full'>
                    <img src={data.image} className='w-full h-full object-cover' alt="img" />
                </div>
                <div className='w-3/4 h-full'>
                    <p className="text-4xl mb-4">{data.name}</p>
                    <p className="text-3xl mb-4">{data.price} Rs</p>
                    <p className="text-3xl mb-4">{data.description}</p>
                    <div className='flex w-44 my-5 border-red-500 border-2 py-0.5 px-2 gap-2'>
                        <div className='text-2xl text-white mx-0.5 cursor-pointer bg-red-600 py-0 rounded-3xl px-2' onClick={() => prodQty > 1 && setProdQty(prev => prev - 1)}>−</div>
                        <div className='text-xl mx-0.5 w-full'>Qty: {prodQty}</div>
                        <div className='text-2xl text-white mx-0.5 cursor-pointer bg-red-600 py-0 rounded-3xl px-2' onClick={() => prodQty < 50 && setProdQty(prev => prev + 1)}>+</div>
                    </div>
                    <button onClick={isData ? null : handleAddtoCart} className='h-12 border-2 bg-red-500 text-xl text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-6 py-2'>{isData ? 'Item is in Cart' : 'Add to Cart'}</button>
                </div>
            </div>
            <Footer />
        </>
    )
}