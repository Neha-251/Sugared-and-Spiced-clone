import { useCallback, useEffect, useRef, useState } from "react";
import { ImLeaf } from 'react-icons/im';
import { GiChickenLeg } from 'react-icons/gi';
import { debounce } from "lodash";
import { Rating } from "./Rating";
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from "../Modal";


export const Food = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate()


    const search = useLocation().search;
    const page = new URLSearchParams(search).get('page') || 1;
    const desc = new URLSearchParams(search).get('desc') || '';
    const s = new URLSearchParams(search).get('s') || '';
    const gtprice = new URLSearchParams(search).get('gtprice') || '';
    const gtrating = new URLSearchParams(search).get('gtrating') || '';


    const scrollRef = useRef();
    const [currPage, setCurrPage] = useState(page);
    const [totalPage, setTotalPage] = useState(0);
    const [filtering, setFiltering] = useState(false);
    const [price, setPrice] = useState(1);
    const [rating, setRating] = useState(1);



    const fetchFood = async () => {
        if (loading) {
            let res = await fetch(`https://sugared-spiced-clone.herokuapp.com/products?page=${page}&pagesize=6&s=${s}&desc=${desc}&gtprice=${gtprice}&gtrating=${gtrating}`);
            let res_data = await res.json()

            let products = res_data.products;
            let newArr = data.concat(products)
            setTotalPage(Math.ceil(res_data.totalpages))
            setData(newArr)
            setLoading(false)

        }
        if (filtering) {
            let res = await fetch(`https://sugared-spiced-clone.herokuapp.com/products?page=${page}&pagesize=6&s=${s}&desc=${desc}&gtprice=${gtprice}&gtrating=${gtrating}`);
            let res_data = await res.json()

            let products = res_data.products;
            setTotalPage(Math.ceil(res_data.totalpages))
            setData(products)
            setFiltering(false)
            scrollRef.current.scrollTo(0, 0);
        }

    }




    useEffect(() => {

        fetchFood()
    }, [page, desc, gtrating, gtprice, s])


    const [loading, setLoading] = useState(true);

    const observer = useRef();

    const handlePage = useCallback(debounce(() => {
        
            setCurrPage(prev => prev + 1)
            setLoading(true)
        
    }, 5000), [loading])

    useEffect(() => {
        navigate(`/products?page=${currPage}&pagesize=6&s=${s}&desc=${desc}&gtprice=${gtprice}&gtrating=${gtrating}`)

    }, [currPage])


    const lastUserRef = useCallback(
        (node) => {
            if (loading) {
                return;
            }
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && totalPage > currPage) {

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
        setFiltering(true)
        setCurrPage(1);
        navigate(`/products?page=${1}&pagesize=6&s=${s}&desc=${e.target.value}&gtprice=${gtprice}&gtrating=${gtrating}`)
    }
    const handleGtprice = (e) => {
        setPrice(e.target.value)
        setCurrPage(1);
        setFiltering(true)
        navigate(`/products?page=${1}&pagesize=6&s=${s}&desc=${desc}&gtprice=${e.target.value}&gtrating=${gtrating}`)

    }
    const handleGtrating = (e) => {
        setRating(e.target.value)
        setCurrPage(1);
        setFiltering(true)
        navigate(`/products?page=${1}&pagesize=6&s=${s}&desc=${desc}&gtprice=${gtprice}&gtrating=${e.target.value}`)

    }
    const handleQuery = (e) => {
        setCurrPage(1);
        setFiltering(true)
        navigate(`/products?page=${1}&pagesize=6&s=${e.target.value}&desc=${desc}&gtprice=${gtprice}&gtrating=${gtrating}`)

    }

    return (
        <div ref={scrollRef} className='flex  w-11/12 mx-auto overflow-y-hidden'>
                {/* {loading && <Modal msg={'loading'}/>} */}
            <div className="w-72 p-4 fixed mt-28 shadow-xl shadow-gray-800 h-96">

                <p className="text-center text-2xl mb-4">Menu</p>

                <input type='text' placeholder="Search" onChange={handleQuery} className=" w-full mb-5 py-1 px-2 border-2 border-red-200" />
                <select className="py-1 px-2 border-2 mb-5 border-red-200" onChange={handleDesc}>
                    <option value=''>All</option>
                    <option value='Veg'>Veg</option>
                    <option value='Non Veg'>Non-Veg</option>
                </select>

                <div>
                    <p>Price {price}</p>
                    <input type='range' onChange={handleGtprice} min='100' max='300' step='20' value={price} className="w-full py-1 px-2 border-2 border-red-200" />
                </div>
                <div>
                    <p>Rating {rating}</p>
                    <input type='range' onChange={handleGtrating} min='1' max='4.5' step='0.5' value={rating} className="w-full py-1 px-2 border-2 border-red-200" />
                </div>

                <div className='text-center'><button className='h-10 border-2 bg-red-500 text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-5 py-1'>Clear Filter</button></div>

            </div>
            <div className="grid-cols-2 grid ml-80 overflow-y-hidden text-center">
                {
                    data.map((el, idx) => {
                        if (data.length === idx + 1) {
                            return (
                                <div ref={lastUserRef} key={el._id} className='p-10 mb-5 mx-8 hover:shadow-xl cursor-pointer'>
                                    <div className="w-84 h-64 rounded-md overflow-hidden">
                                        <img src={el.image} className='object-cover rounded-md h-full w-full hover:w-96 hover:ease-in ease-out hover:h-72 duration-500 delay-75' alt='img' />

                                    </div>
                                    <div >
                                        <p className='text-xl my-2'>{el.name}</p>
                                        <p className='text-xl'>{el.price} Rs</p>
                                        <p className={el.description === "Veg" ? 'flex m-1 text-xl py-2 text-green-600' : 'flex m-1 text-2xl py-2 text-yellow-700'}> {el.description === 'Veg' ? <ImLeaf /> : <GiChickenLeg />}</p>
                                        <div className="flex"><Rating rating={el.rating} /><p className="-mt-1">{el.rating}</p></div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={el._id} className='p-10 mb-5 mx-8 hover:shadow-xl cursor-pointer'>
                                    <div className="w-84 h-64 rounded-md overflow-hidden">
                                        <img src={el.image} className='object-cover rounded-md h-full w-full hover:w-96 hover:ease-in ease-out hover:h-72 duration-500 delay-75' alt='img' />
                                    </div>

                                    <div >
                                        <p className='text-xl my-2'>{el.name}</p>
                                        <p className='text-xl'>{el.price} Rs</p>
                                        <p className={el.description === "Veg" ? 'flex m-1 text-xl py-2 text-green-600' : 'flex m-1 text-2xl py-2 text-yellow-700'}> {el.description === 'Veg' ? <ImLeaf /> : <GiChickenLeg />}</p>
                                        <div className="flex"><Rating rating={el.rating} /><p className="-mt-1">{el.rating}</p></div>
                                    </div>
                                </div>
                            )
                        }


                    })
                }
            


            </div>
        </div>
    )
}

