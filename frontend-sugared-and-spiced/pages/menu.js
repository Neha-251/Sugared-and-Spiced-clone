import { Footer } from "../components/Footer/Footer";
import { FloatHeader } from "../components/Header/FloatHeader";
import { Header } from "../components/Header/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImLeaf } from 'react-icons/im';
import {GiChickenLeg} from 'react-icons/gi';
import { Rating } from "../components/rating";

export async function getServerSideProps() {

  let res = await fetch("https://sugared-spiced-clone.herokuapp.com/products?page=1&pagesize=6");
  let data = await res.json()

  return {
    props: {
      foods: data
    },
  }
}


const Menu = ({ foods }) => {

  const [data, setData] = useState(foods)

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

  const [currPage, setCurrPage] = useState(1);
  const [desc, setDesc] = useState(1);

  // const fetchFood = () => {
  //   let res = await fetch(`https://sugared-spiced-clone.herokuapp.com/products?page=${currpage}&pagesize=6&desc=${desc}&`);
  //   let data = await res.json()
  // }


  return (
    <>
      <FloatHeader display={display} />
      <Header display={display} />
      <div>
        <div className="w-full h-screen  justify-center align-middle text-center relative flex">
          <div className="min-w-fit border-2 top-8 right-6 z-10 left-6  bottom-10 absolute"></div>
          <Image src='/images/sweet-1.webp' layout='fill' objectFit='cover' className='relative z-0' alt="home_main" />
        </div>

        <div id='welcomeText' className='text-5xl text-center py-20'>Menu</div>

        <div className='flex  w-11/12 mx-auto '>

          <div className="w-72 mt-10 p-4 shadow-xl shadow-gray-800 h-96">

            <p className="text-center text-2xl mb-4">Filter</p>

            <input type='text' placeholder="Search" className=" w-full mb-5 py-1 px-2 border-2 border-red-200" />
            <select className="py-1 px-2 border-2 mb-5 border-red-200">
              <option value='all'>All</option>
              <option value='Veg'>Veg</option>
              <option value='Non Veg'>Non-Veg</option>
            </select>

            <input type='range' min='100' max='300' step='20' className="w-full py-1 px-2 border-2 border-red-200" />
            <input type='range' min='1' max='4.5' step='0.5' className="w-full py-1 px-2 border-2 border-red-200" />

            
          </div>

          <div className='grid-cols-2 h-screen grid mx-auto overflow-y-scroll'>
            {
              data.products.map((el) => {
                return (
                  <div key={el._id} className='p-10 mb-5 mx-8 hover:shadow-xl cursor-pointer'>
                    <Image src={el.image} height='250' width='350' />
                    <div >
                        <p className='text-2xl my-2'>{el.name}</p>
                        <p className='text-xl'>{el.price} Rs</p>
                        <p className='flex m-1 text-xl py-2 text-green-600'> {el.description==='Veg'? <ImLeaf/> : <GiChickenLeg/>}</p>
                        <Rating rating={el.rating}/>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Menu;