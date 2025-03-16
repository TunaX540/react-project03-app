import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Piccard from '../Components/Piccard'
import down from './../assets/down.png'
import pic1 from './../assets/pic1.png'
import pic2 from './../assets/pic2.png'
function Aboutpage() {
    return (
        <>
            <Navbar />
            About page
            <br />
            <Piccard showimg={down} wi={'100px'} />
            <br />
            <Piccard showimg={pic1} wi={'50px'} />
            <br />
            <Piccard showimg={pic2} wi={'75px'} />
            <br />
            <Footer />
        </>
    )
}

export default Aboutpage