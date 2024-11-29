import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Cart from './Cart'
import Login from './Login'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Signup from './Signup'
import Admin from './Admin'
export default function App() {
  return (
    <>
        <Header/>
        <BrowserRouter>
        <Navbar/>
        <hr></hr>
        <Routes>
          <Route index element={<Content />} />
          <Route path="content" element={<Content />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="Admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
        <Footer/>
    </>
  )
}
