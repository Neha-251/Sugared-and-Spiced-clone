import { useEffect, useState } from 'react';
import { FloatHeader } from '../Header/FloatHeader';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import cake_1 from '../images/cake-1.avif';
import cake_2 from '../images/cake-2.avif';
import cake_3 from '../images/cake-3.avif';
import cake_4 from '../images/cake-4.avif';
import cake_5 from '../images/cake-5.avif';
import cake_6 from '../images/cake-6.avif';
import main_img from '../images/home-main-img.avif'
import {Link} from 'react-router-dom';


const Home = () => {

  const [display, setDisplay] = useState(false)


  const handleIntersectionObser = () => {

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    }

    const target = document.getElementById('welcomeText');

    const headerObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setDisplay(true)
        }
        if (!entry.isIntersecting) {
          setDisplay(false)
        }

      }, options)
    })
    headerObserver.observe(target)

  }

  useEffect(() => {
    handleIntersectionObser()
  })


  return (


    <div>


      <Header display={display} />
      <FloatHeader display={display} />

      <div className="w-full h-screen  justify-center align-middle text-center relative flex">
        <div className="min-w-fit border-2 top-8 right-6 z-10 left-6  bottom-10 absolute"></div>
        <img src={main_img} className='w-full  z-0' alt="home_main" />
        {/* <img src='/images/sweet-1.webp' layout='fill' objectFit='cover' className='relative z-0' alt="home_main" /> */}
        
      </div>

      <div id='welcomeText'>
        <div className="p-16 text-center items-center">
          <p className="text-4xl text-zinc-800 ">Welcome to Sugared & Spiced</p>
          <div className='h-0.5 w-2/3 bg-zinc-800 my-4 mx-auto'></div>
          <p>Baked from scratch, in small batches, in a back alley in the heart of Old Strathcona</p>
        </div>


        <div>
          <div className='w-6/12 h-82 p-4 text-center border-white border-2 absolute z-10 mt-60 left-96'>
            <div className='p-8 bg-slate-100 h-72'>
              <p className='text-3xl mb-6'>Cake Club</p>
              <p>Take some of the stress out of your celebrations with Sugared & Spiced’s Cake Club, an exclusive cake subscription that lets you pick three special dates and have a cake ready in time to celebrate.</p>

              <button className=' border-1 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1 my-7'>
              <Link to='/menu'>Join the Club</Link>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2 p-2 h-screen grid-rows-2 gap-0'>
            <div className='m-0 w-full'>
              <img src={cake_1} className='w-full h-full m-0' alt='img_sample' />
            </div>
            <div className='m-0  w-full'>
              <img src={cake_2} className='w-full h-full m-0' alt='img_sample' />
            </div>

            <div className='m-0  w-full'>
              <img src={cake_3} className='w-full h-full m-0' alt='img_sample' />
            </div>
            <div className='m-0 w-full'>
              <img src={cake_4} className='w-full h-full m-0' alt='img_sample' />
            </div>
          </div>
        </div>

        <div>
          <div className='w-6/12 h-82 p-4 text-center border-white border-2 absolute z-10 mt-60 left-96'>
            <div className='p-8 bg-slate-100 h-72'>
              <p className='text-3xl mb-6'>Signature Cake</p>
              <p className='mb-3'>The Signature Cake is an unmistakable symbol of Sugared & Spiced craftsmanship.</p>
              <p>Each Signature Cake is three round layers of delicious cake stacked with made-from-scratch Italian buttercream, and a variety of fillings, topped with baked meringues and macarons, all skillfully and freshly made in house.</p>
              <button className=' border-1 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1 my-7'>
                Order Now
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2 p-2 h-screen grid-rows-2 gap-0'>
            <div className='m-0 w-full'>
              <img src={cake_5} className='w-full h-full m-0' alt='img_sample' />
            </div>
            <div className='m-0 w-full'>
              <img src={cake_6} className='w-full h-full m-0' alt='img_sample' />
            </div>

            <div className='m-0 w-full'>
              <img src={cake_2} className='w-full h-full m-0' alt='img_sample' />
            </div>
            <div className='m-0 w-full'>
              <img src={cake_1} className='w-full h-full m-0' alt='img_sample' />
            </div>
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Home;