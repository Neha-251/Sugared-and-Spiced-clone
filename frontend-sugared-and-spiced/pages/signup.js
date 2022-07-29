

const Signup = () => {

    return (
        <div className="text-center w-1/2 mx-auto p-5 my-20 ">
            <p className="text-4xl text-red-400 mb-10">Email Signup</p>

            {/* <p className="text-lg">Want to stay up to date on Sugared & Spiced Baked Goods news? This is the place to be. We send out a newsletter, but not so often that you'll get annoyed. It will contain interesting stuff, pictures you'll wish you could taste, and a little bit of inside track information that might get you goods that others don't have access to. Join us!</p> */}
            
            <div className="my-14">
                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" type="text" placeholder="First Name" /> <br/>
                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" type="text" placeholder="Last Name" /><br/>
                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" type="text" placeholder="Email" /><br/>
                <input className="outline-none border-2 border-red-300 my-2 w-2/4 h-10 p-2 text-xl" type='password' placeholder="Password" /><br/>
                <button className='border-2 mt-4 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1'>
                    Email Signup
                </button>
            </div>
        </div>
    )
}

export default Signup;