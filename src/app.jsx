import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Menu from "./pages/Menu"
import AboutUs from "./pages/AboutUs"
import Gallery from "./pages/Gallery"
import Testimonials from "./pages/Testimonials"
import Reservations from "./pages/Reservations"
import ContactUS from "./pages/ContactUS"

function app() {
    return (
    <BrowserRouter>
        <div><Navbar/></div>
        <div>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/Testimonials" element={<Testimonials/>}/>
            <Route path="/Reservations" element={<Reservations/>}/>
            <Route path="/ContactUS" element={<ContactUS/>}/>
        </Routes>
        </div>
    </BrowserRouter>
    )
}
export default app