import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Products from './ProductsListing'
import About from '../pages/About'
import Contact from '../pages/Contact'

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    )
}

export default Main