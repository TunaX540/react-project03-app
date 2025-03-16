import React from 'react'
import Navbar from './../Components/Navbar'
import Footer from '../Components/Footer'
import Piccard from '../Components/Piccard'
import down from './../assets/down.png'
import pic1 from './../assets/pic1.png'
import pic2 from './../assets/pic2.png'
function Loginpage() {
    return (
        <>
            <Navbar />
            Login page
            <br />
            <Piccard showimg={down} wi={'125px'} />
            <br />
            <Piccard showimg={pic1} wi={'40px'} />
            <br />
            <Piccard showimg={pic2} wi={'30px'} />
            <br />
            <Footer /></>
    )
}

export default Loginpage