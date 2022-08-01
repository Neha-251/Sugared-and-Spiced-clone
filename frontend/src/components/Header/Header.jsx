import logo from '../images/logo.png';
import {Link} from 'react-router-dom'
import {FaOpencart} from 'react-icons/fa';


export const Header = ({ display }) => {


    return (
        <>
            {
                display ? null :

                    <div>
                        <nav className="font-serif p-3 text-grey text-center tracking-wider text-sm ">
                            <p>REAR 10334 82 AVE, EDMONTON, AB T6E rZ8  (780) 244-2253</p>
                        </nav>

                        {/* <nav className='absolute z-10 top-10 left-10'>
                            <div className='cursor-pointer'><Image src="/images/logo.png" height="80" width="150" /></div>

                        </nav> */}

                        <nav className="flex absolute cursor-pointer top-20 left-10 w-full justify-between z-20">
                            <div className="p-2">
                                <img src={logo} height="80" width="150" />
                            </div>

                            <div className="flex pt-2 w-1/2 text-white mr-20 justify-evenly cursor-pointer">

                                <p className="cursor-pointer  hover:text-teal-100">Our Story</p>
                                <p className="cursor-pointer  hover:text-teal-100"><Link to='/'>Home</Link></p>
                                <p className="cursor-pointer  hover:text-teal-100">Hours & Location</p>
                                <p className="cursor-pointer  hover:text-teal-100"> Gift Cards</p>
                                <p className="cursor-pointer  hover:text-teal-100"><Link to='/products'>Menu</Link></p>
                                <Link to='/cart'><p className="cursor-pointer hover:text-teal-100 flex gap-1">Cart <FaOpencart className='mt-1 text-lg  text-red-600'/></p></Link>
                            </div>
                        </nav>

                    </div>
            }
        </>
    )
}