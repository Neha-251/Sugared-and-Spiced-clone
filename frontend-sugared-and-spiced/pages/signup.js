
import { useState } from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { FloatHeader } from '../components/Header/FloatHeader';

const Signup = () => {


    const [userData, setUserData] = useState({
        name: '',
        email: '',
    })
    console.log('userData', userData)

    const registerUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4080/users/signup", userData).
        then(res => alert(res.data)).catch(err=> alert(err.message))
    }

    const handleInp = (e) => {
        // console.log('e', e, name)

        let {name, value} = e.target
        console.log('name', name)

        setUserData({
            ...userData,
            [name]: value
        })
    
    }


    return (
        <>
        <FloatHeader display={true}/>
        <div className="text-center w-1/2 mx-auto p-5 my-20 ">
            <p className="text-4xl text-red-400 mb-10">Email Signup</p>

            <p className="text-lg">Want to stay up to date on Sugared & Spiced Baked Goods news? This is the place to be. We send out a newsletter, but not so often that you'll get annoyed. It will contain interesting stuff, pictures you'll wish you could taste, and a little bit of inside track information that might get you goods that others don't have access to. Join us!</p>
       
           <div className="my-14">
                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" value={userData.name} onChange={handleInp} name='name'  type="text" placeholder="Firstname Lastname" /> <br/>
                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" value={userData.email} onChange={handleInp} name='email'  type="text" placeholder="Email" /><br/>
                <button onClick={registerUser} className='border-2 mt-4 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1'>
                    Email Signup
                </button>

            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Signup;