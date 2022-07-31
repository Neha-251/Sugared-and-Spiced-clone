import { Route, Routes } from "react-router-dom"
import Home from "../components/Home/Home"
import Menu from "../components/Menu/Menu"
import Signup from "../components/Signup/signup"


export const AllRoutes = () => {


    return (
        <>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/products' element={<Menu/>} />
          </Routes>
            
        </>
    )
}