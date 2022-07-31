import logo from '../images/logo.png';
import {Link} from 'react-router-dom'

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
                                <p className="cursor-pointer  hover:text-teal-100"><Link to='/menu'>Menu</Link></p>
                                <p className="cursor-pointer  hover:text-teal-100 flex gap-1">Order Online
                                    <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg></span>
                                </p>
                            </div>
                        </nav>

                    </div>
            }
        </>
    )
}