
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { FloatHeader } from '../Header/FloatHeader';
import { Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate()

    const [userId, setUserId] = useState('')
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [seePassword, setSeePassword] = useState(false)
    const [loading, setLoading] = useState(false);

    const registerUser = (e) => {
        setLoading(true);
        e.preventDefault();

        if(termLeft) {
            axios.post("https://sugared-spiced-clone.herokuapp.com/users/signup", userData).
            then(res => {alert(res.data); setLoading(false); termLeft(false)}).catch(err => alert(err.message))
        } else {
            axios.post("https://sugared-spiced-clone.herokuapp.com/users/login", userData).
            then(res => {setUserId(res.data.user._id); setLoading(false); navigate('/products')}).catch(err => alert(err.message))
        }
    }

    const handleInp = (e) => {
        let { name, value } = e.target

        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSeePsd = () => {
        if (seePassword) {
            setSeePassword(false);
        } else {
            setSeePassword(true);
        }
    }

    const [termLeft, setTermLeft] = useState(true);

   

    return (
        <>
            <FloatHeader display={true} />
            <div className="text-center w-1/2 mx-auto p-5 my-20">
                <div className='flex h-16'>
                    <div onClick={()=> setTermLeft(true)} className={termLeft ? 'w-2/4 h-full text-center cursor-pointer py-2 ' :
                        'w-2/4 h-full text-center cursor-pointer py-2 shadow-lg'}>
                        <p className="text-4xl text-red-400 mb-10">Signup</p>
                    </div>
                    <div onClick={()=> setTermLeft(false)} className={termLeft ? 'w-2/4 h-full text-center cursor-pointer py-2 shadow-lg' : 'w-2/4 h-full text-center cursor-pointer py-2'}>
                        <p className="text-4xl text-red-400 mb-10">Login</p>
                    </div>
                </div>

                {
                    termLeft ?
                        <div>

                            {/* <p className="text-lg">Want to stay up to date on Sugared & Spiced Baked Goods news? This is the place to be. We send out a newsletter, but not so often that you'll get annoyed. It will contain interesting stuff, pictures you'll wish you could taste, and a little bit of inside track information that might get you goods that others don't have access to. Join us!</p> */}

                            <div className="my-14">
                                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" value={userData.name} onChange={handleInp} name='name' type="text" placeholder="Firstname Lastname" /> <br />
                                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" value={userData.email} onChange={handleInp} name='email' type="text" placeholder="Email" /><br />
                                <div className='flex w-2/4 mx-auto'>
                                    <input className="outline-none  border-2 border-red-300 my-2 w-full h-10 p-2 text-xl" value={userData.password} onChange={handleInp} name='password' type={seePassword ? "text" : "password"} placeholder="********" /><br />
                                    <div className='text-center text-lg ml-80 mt-5 absolute cursor-pointer'>{seePassword ? <AiFillEye onClick={handleSeePsd} /> : <AiFillEyeInvisible onClick={handleSeePsd} />}</div>
                                </div>

                                <input onClick={registerUser} type="submit" value="Signup" className='border-2 mt-4 w-2/4 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234  py-1'/>

                            </div>
                        </div> :
                        <div>

                            {/* <p className="text-lg">Want to stay up to date on Sugared & Spiced Baked Goods news? This is the place to be. We send out a newsletter, but not so often that you'll get annoyed. It will contain interesting stuff, pictures you'll wish you could taste, and a little bit of inside track information that might get you goods that others don't have access to. Join us!</p> */}

                            <div className="my-14">
                                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" value={userData.name} onChange={handleInp} name='name' type="text" placeholder="Firstname Lastname" /> <br />
                                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" value={userData.email} onChange={handleInp} name='email' type="text" placeholder="Email" /><br />
                                <div className='flex w-2/4 mx-auto'>
                                    <input className="outline-none  border-2 border-red-300 my-2 w-full h-10 p-2 text-xl" value={userData.password} onChange={handleInp} name='password' type={seePassword ? "text" : "password"} placeholder="********" /><br />
                                    <div className='text-center text-lg ml-80 mt-5 absolute cursor-pointer'>{seePassword ? <AiFillEye onClick={handleSeePsd} /> : <AiFillEyeInvisible onClick={handleSeePsd} />}</div>
                                </div>

                                <input onClick={registerUser} type="submit" value="Login" className='border-2 mt-4 w-2/4 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234  py-1'/>

                            </div>
                        </div>
                }

            </div>
            <Footer />
        </>
    )
}

export default Signup;