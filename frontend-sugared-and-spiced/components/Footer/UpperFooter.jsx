import { BsTwitter, BsInstagram } from 'react-icons/bs'

export const UpperFooter = () => {
    return (
        <>
            
                <div className='flex px-2 pb-2 justify-between h-18 z-20 bottom-0 w-full group-hover:p-3'>
                    <div className='flex gap-2 h-11 relative'>
                        <div className='px-2 py-1 bg-black text-white text-2xl'><BsTwitter /></div>

                        <div className='p-2 bg-black text-white text-2xl'><BsInstagram /></div>
                        <div className='p-2 bg-black text-white text-2xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                    </div>

                    <div className='flex justify-evenly m-1 w-3/12 align-middle p-1 relative'>
                        <button className='h-8 border-0 outline-none hover:text-red'>Events & Specials</button>
                        <button className=' border-2 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1 '>
                            Email Signup
                        </button>
                    </div>
                </div>
        </>
    )
}