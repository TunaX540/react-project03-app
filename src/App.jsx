import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loginpage from "./views/Loginpage"
import Homepage from "./views/Homepage"
import Aboutpage from "./views/Aboutpage"
import Contactpage from "./views/Contactpage"
import Registerpage from "./views/Registerpage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/wow/contact" element={<Contactpage />} />
          <Route path="/sau/dti/regis" element={<Registerpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
