import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Banner from '../../../public/banner.png'
const AboutUs=()=>{
    return(
        <>
        <Header/>
        <div className='container-aboutUs'>
            <div className='banner'>
            <a href='/'><Image src={Banner} alt="Picture of the author"/></a> 
            </div>
            <div className='aboutUs'>
                <h3 id="aboutUs-header">About Us</h3>
                <p id="aboutUs-text">With increase in need of Health Care facility, patients are compelled to waste some of their time in waiting phase. This is a website dedicated to provide easy registration and appointment facility for patient; eradicating the need to wait for hours in hospital queues. This is an approach to make Health services easily accessible. This project targets to make Health Services easily accesible to the needy patients, allowing them to register and book appointments at a available time according to their convinience.</p>
            </div>
            </div>
            <Footer/>
        </>
    )

}
export default AboutUs