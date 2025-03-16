import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h4>
                    <Link to="/" style={{ textAlign: "center", margin: "5px" }}>ลงชื่อเข้าใช้</Link>
                    <Link to="/home" style={{ textAlign: "center", margin: "5px" }}>หน้าหลัก</Link>
                    <Link to="/about" style={{ textAlign: "center", margin: "5px" }}>เกี่ยวกับเรา</Link>
                    <Link to="/wow/contact" style={{ textAlign: "center", margin: "5px" }}>ติดต่อเรา</Link>
                    <Link to="/sau/dti/regis" style={{ textAlign: "center", margin: "5px" }}>ลงทะเบียน</Link>
                </h4>
                <Header />
                <br />
            </div>
        </>
    )
}

export function Header() {
    <>
        <h2 style={{ textAlign: "center", color: "purple", margin: "10px 0px" }}>Welcome to DTI SAU</h2>
    </>
}
