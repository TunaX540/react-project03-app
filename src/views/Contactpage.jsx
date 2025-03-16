import React from 'react'
import Navbar from './../Components/Navbar'
import Footer from '../Components/Footer'
import Piccard from '../Components/Piccard'
import down from './../assets/down.png'
import pic1 from './../assets/pic1.png'
import pic2 from './../assets/pic2.png'
function Contactpage() {
    return (
        <>
            <Navbar />
            Contact page
            <br />
            <Piccard showimg={down} wi={'50px'} />
            <br />
            <Piccard showimg={pic1} wi={'75px'} />
            <br />
            <Piccard showimg={pic2} wi={'100px'} />
            <br />
            <Footer /></ >
    )
}

export default Contactpage