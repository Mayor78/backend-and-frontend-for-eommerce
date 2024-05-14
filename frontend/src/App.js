import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'
import { ToastContainer } from 'react-toastify';
import Login from './routes/Login'
import Navbar from './components/Navbar'
import TopBanner from './components/TopBanner'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
     <TopBanner/>
    <Navbar/>
    <ToastContainer/>
    <Routes>
    <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
