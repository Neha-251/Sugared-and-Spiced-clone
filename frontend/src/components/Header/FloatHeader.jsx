import logo from '../images/logo.png';
import {Link} from 'react-router-dom'


export const FloatHeader = ({ display }) => {


    return (

        <>
            {display ?
                <div>
                    <div className="font-serif p-3 text-grey text-center tracking-wider text-sm">
                    <p>REAR 10334 82 AVE, EDMONTON, AB T6E rZ8  (780) 244-2253</p>
                </div>
                    <nav className="flex fixed top-8 left-10 w-full justify-between z-20">
                        <div className="p-2 cursor-pointer bg-slate-50 opacity-80">
                            <img src={logo} height="80" width="150" />
                        </div>

                        <div className="flex pt-2 w-1/2 h-10 bg-slate-50 opacity-80 text-black p-2 mr-20 justify-evenly cursor-pointer">

                            <p className="cursor-pointer  hover:text-teal-100">Our Story</p>
                            <Link to='/'><p className="cursor-pointer  hover:text-teal-100">Home</p></Link>
                             <p className="cursor-pointer  hover:text-teal-100">Hours & Location</p>
                            <p className="cursor-pointer  hover:text-teal-100"> Gift Cards</p>
                            <Link to='/products'><p className="cursor-pointer  hover:text-teal-100">Menu</p></Link>
                            <p className="cursor-pointer  hover:text-teal-100 flex gap-1">Order Online
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg></span>
                            </p>
                        </div>
                    </nav>
                </div>
                : null}
        </>
    )
}