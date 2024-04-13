import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Hero from './Components/Hero'
import Delivery from './Components/Delivery'
import Book from './Components/Book'
import BProduction from './Components/BProduction'
import ProductSlider from './Components/ProductSlider'
import SProduct from './Components/SProduct'
import Products from './Components/Products'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <Delivery />
    <Book />
    <BProduction />
    <ProductSlider />
    <Products />
    <Footer />
    </>
  )
}

export default App
