import { useEffect, useState } from 'react'
import {FaStarHalf, FaStar} from 'react-icons/fa'


export const Rating = ({rating}) => {

    const [stars, setStars] = useState([])

    useEffect(()=> {
        let arr = [];
        let newrating = Math.round(rating)

        for(let i = 1; i < rating; i++){
            arr.push(1);
        }
        
        newrating-rating===0? arr=arr : arr.push(2)
        setStars(arr)

    },[rating])


    return (
        <div className='flex'>
            {
                stars.map((el)=> {
                    return (
                        <div className='mx-0.2 text-amber-600 w-5'>{el===1? <FaStar/> : <FaStarHalf/>}</div>
                    )
                })
            }
        </div>
    )
}