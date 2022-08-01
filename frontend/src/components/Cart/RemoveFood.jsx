// import axios from "axios";
// import { useContext, useState } from "react";
// import { userContext } from "../Context/userContext";
// import { Modal } from "../Modal";



// export const RemoveFood= ({foodName}) => {

//     const {userId, refreshCart, setRefreshCart} = useContext(userContext);
//     const [loading, setLoading] = useState(false);

//     const handleRemove = () => {
//         setLoading(true)
//         axios.patch(`https://sugared-spiced-clone.herokuapp.com/carts/edit/products/delete?userId=${userId}&foodName=${foodName}`)
//         .then(() => {setLoading(false); setRefreshCart(true)})
//     }

//     return(
//         <>
//         {loading && <Modal />}
//         <button onClick={()=> handleRemove()} className='h-12 border-2 bg-red-500 text-xl text-white hover:bg-white hover:border-2 hover:border-red-500 hover:text-red-500 uppercase bg-#c65234 px-6 py-2'>Remove</button>
//         </>
//     )
// }