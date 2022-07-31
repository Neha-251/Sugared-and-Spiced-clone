import { useCallback, useEffect, useRef, useState } from "react";
import { ImLeaf } from 'react-icons/im';
import { GiChickenLeg } from 'react-icons/gi';
import { debounce } from "lodash";
import { Rating } from "./Rating";
import {useNavigate} from 'react-router-dom';


export const Food = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const [currPage, setCurrPage] = useState(1);
    console.log('currPage', currPage)
    const [gtprice, setGtprice] = useState(0);
    const [gtrating, setGtrating] = useState(0);
    const [desc, setDesc] = useState('all');
    const [query, setQuery] = useState('all');
    const [totalPage, setTotalPage] = useState(0);

    const fetchFood = async () => {
        if (loading) {
            let res = await fetch(`https://sugared-spiced-clone.herokuapp.com/products?page=${currPage}&pagesize=6&s=${query}&desc=${desc}&gtprice=${gtprice}&gtrating=${gtrating}`);
            let res_data = await res.json()
            console.log('res_data', res_data)

            let products = res_data.products;
            let newArr = data.concat(products)
            setTotalPage(Math.ceil(data.totalpages))
            setData(newArr)
            setLoading(false)

        }

    }

    const fetchFoodFilter = async () => {
        if (loading) {
            let res = await fetch(`https://sugared-spiced-clone.herokuapp.com/products?page=${currPage}&pagesize=6&s=${query}&desc=${desc}&gtprice=${gtprice}&gtrating=${gtrating}`);
            let res_data = await res.json()
            setTotalPage(Math.ceil(data.totalpages))

            let products = res_data.products;
          //  let newArr = data.concat(products)

            setData(products)
            setLoading(false)

        }

    }


    // console.log('data', data)
    // useEffect(()=> {
    //     setCurrPage(1)
    //     fetchFoodFilter();
    // }, [desc, gtrating, gtprice, query])

    useEffect(() => {

        fetchFood()
    }, [currPage, desc, gtrating, gtprice, query])



    const [loading, setLoading] = useState(true);
    // const [filterLoading, setFilterLoading] = useState(false)

    const observer = useRef();
    
    const handlePage = useCallback(debounce(() => {
        setCurrPage((prev) => prev + 1);
        setLoading(true)
        console.log('loading')
    }, 5000), [loading])

    const lastUserRef = useCallback(
        (node) => {
            if (loading) {
                return;
            }
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    handlePage()
                }
            });
            if (node) {
                observer.current.observe(node);
            }
        },
        [loading]
    )

    const handleDesc = (e) => {
        setLoading(true)
        navigate(`/menu?page=1&pagesize=6&s=${query}&desc=${e.target.value}&gtprice=${gtprice}&gtrating=${gtrating}`)
    }
    const handleGtprice = (e) => {  
        setLoading(true)
        navigate(`/menu?page=1&pagesize=6&s=${query}&desc=${desc}&gtprice=${e.target.value}&gtrating=${gtrating}`)

    }
    const handleGtrating = (e) => {
        setLoading(true)
        navigate(`/menu?page=1&pagesize=6&s=${query}&desc=${desc}&gtprice=${gtprice}&gtrating=${e.target.value}`)

    }
    const handleQuery = (e) => {
        setLoading(true)
        navigate(`/menu?page=1&pagesize=6&s=${e.target.value}&desc=${desc}&gtprice=${gtprice}&gtrating=${gtrating}`)

    }

    return (
        <div className='flex  w-11/12 mx-auto '>
            <div className="w-72 mt-10 p-4 shadow-xl shadow-gray-800 h-96">

                <p className="text-center text-2xl mb-4">Filter</p>

                <input type='text' placeholder="Search" onChange={handleQuery} className=" w-full mb-5 py-1 px-2 border-2 border-red-200" />
                <select className="py-1 px-2 border-2 mb-5 border-red-200" onChange={handleDesc}>
                    <option value='all'>All</option>
                    <option value='Veg'>Veg</option>
                    <option value='Non Veg'>Non-Veg</option>
                </select>

                <div>
                    <p>Price</p>
                    <input type='range' onChange={handleGtprice} min='100' max='300' step='20' className="w-full py-1 px-2 border-2 border-red-200" />
                </div>
                <div>
                    <p>Rating</p>
                    <input type='range' onChange={handleGtrating} min='1' max='4.5' step='0.5' className="w-full py-1 px-2 border-2 border-red-200" />
                </div>


            </div>
            <div className='grid-cols-2 h-screen grid mx-auto overflow-y-scroll'>
                {
                    data.map((el, idx) => {
                        if (data.length === idx + 1) {
                            return (
                                <div ref={lastUserRef} key={el._id} className='p-10 mb-5 mx-8 hover:shadow-xl cursor-pointer'>
                                    <img className="w-96 h-38" alt='img' />
                                    <div >
                                        <p className='text-xl my-2'>{el.name}</p>
                                        <p className='text-xl'>{el.price} Rs</p>
                                        <p className={el.description==="Veg"? 'flex m-1 text-xl py-2 text-green-600': 'flex m-1 text-2xl py-2 text-yellow-700'}> {el.description === 'Veg' ? <ImLeaf /> : <GiChickenLeg />}</p>
                                        <div className="flex"><Rating rating={el.rating} /><p className="-mt-1">{el.rating}</p></div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={el._id} className='p-10 mb-5 mx-8 hover:shadow-xl cursor-pointer'>
                                    <img src={el.image} className='w-96 h-38' alt='img' />
                                    <div >
                                        <p className='text-xl my-2'>{el.name}</p>
                                        <p className='text-xl'>{el.price} Rs</p>
                                        <p className={el.description==="Veg"? 'flex m-1 text-xl py-2 text-green-600': 'flex m-1 text-2xl py-2 text-yellow-700'}> {el.description === 'Veg' ? <ImLeaf /> : <GiChickenLeg />}</p>
                                        <div className="flex"><Rating rating={el.rating} /><p className="-mt-1">{el.rating}</p></div>
                                    </div>
                                </div>
                            )
                        }


                    })
                }
                <div className="text-center text-xl">{loading&&currPage<totalPage? 'Loading...': null}</div>

            </div>
        </div>
    )
}

