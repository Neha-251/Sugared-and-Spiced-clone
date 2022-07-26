import { BsTwitter, BsInstagram } from 'react-icons/bs'
import {Link} from 'react-router-dom';

export const FixedFooter = ({ display }) => {
    return (
        <>{
            display ?
                <div className='flex px-2 py-1 bg-white pb-1 justify-between h-14 fixed z-20 bottom-0 w-full group-hover:p-3'>
                    <div className='flex gap-2 h-9 relative'>
                        <div className='px-2 py-1 bg-black text-white text-xl'><BsTwitter /></div>

                        <div className='p-2 bg-black text-white text-xl'><BsInstagram /></div>
                        <div className='p-1 bg-black text-white text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                    </div>

                    <div className='flex justify-evenly m-0 w-3/12 align-middle p-0 relative'>
                        <button className='h-10 border-0 outline-none hover:text-red'>Events & Specials</button>
                        <Link to='/signup'> <button className='h-10 border-2 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1'>
                            Email Signup
                        </button></Link>
                    </div>
                </div> : null
        }</>
    )
}