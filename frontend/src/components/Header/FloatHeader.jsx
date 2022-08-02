import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import { useContext } from 'react';
import { userContext } from '../Context/userContext';


export const FloatHeader = ({ display }) => {

    const { cartData } = useContext(userContext)



    return (

        <>
            {display ?
                <div>
                    <div className="font-serif p-3 text-grey text-center tracking-wider text-sm">
                        <p>REAR 10334 82 AVE, EDMONTON, AB T6E rZ8  (780) 244-2253</p>
                    </div>
                    <nav className="flex fixed top-8 left-10 w-full justify-between z-20">
                        <div className="p-2 cursor-pointer bg-slate-50 opacity-80">
                            <img src={logo} height="80" width="150" alt='img' />
                        </div>

                        <div className="flex pt-2 w-1/2 h-10 bg-slate-50 opacity-80 text-black p-2 mr-20 justify-evenly cursor-pointer">

                            <p className="cursor-pointer  hover:text-teal-100">Our Story</p>
                            <Link to='/'><p className="cursor-pointer  hover:text-teal-100">Home</p></Link>
                            <p className="cursor-pointer  hover:text-teal-100">Hours & Location</p>
                            <p className="cursor-pointer  hover:text-teal-100"> Gift Cards</p>
                            <Link to='/products'><p className="cursor-pointer  hover:text-teal-100">Menu</p></Link>
                            <Link to='/cart'><div className="cursor-pointer hover:text-teal-100 flex gap-1">Cart <FaOpencart className='mt-2 text-lg  text-red-600' /><div className='bg-transparent -ml-4 -mt-2 text-red-500'>{cartData.length}</div></div></Link>
                        </div>
                    </nav>
                </div>
                : null}
        </>
    )
}