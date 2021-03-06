import React from 'react'
import Anouncement from '../components/Anouncement'
import { Categories } from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Productes from '../components/Productes'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className='container'>
        <Anouncement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Productes/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home