import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from  '../Pages/Home'
import Products from '../Pages/Products'
import AboutUs from '../Pages/AboutUs'
import SignIn from '../Pages/SignIn'

const Header = () => {
    return (
        <header>
            <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Products' element={<Products/>} />
                <Route path='/AboutUs' element={<AboutUs/>} />
                <Route path='/SignIn' element={<SignIn/>} />
            </Routes>
        </Router>
        </header>
    )
}

export default Header
