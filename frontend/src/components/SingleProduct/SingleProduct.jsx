import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { FloatHeader } from '../Header/FloatHeader';



export const SingleProduct = () => {

    const {id} = useParams();

    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://sugared-spiced-clone.herokuapp.com/products/${id}`)
        .then(res => setData(res.data.productdata)).catch(err => console.log(err))
    })

    const handleAddtoCart = () => {

    }


    return (
        <>
        <FloatHeader display={true}/>
        <div className="flex p-24 gap-6 h-fit">
            <div className='w-full h-full'>
                <img src={data.image} className='w-full h-full object-cover' alt="img" />
            </div>
            <div className='w-full h-full'>
                <p className="text-4xl mb-4">{data.name}</p>
                <p className="text-3xl mb-4">{data.price} Rs</p>
                <p className="text-3xl mb-4">{data.description}</p>
                <button onClick={handleAddtoCart} className='h-10 border-2 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1'>Add to Cart</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}