import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Login from './routes/Login';
import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Account from './routes/Account';
import Cart from './routes/Cart';
import { HomeProvider } from './context/HomeContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <HomeProvider>
      <Router>
        <TopBanner />
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </HomeProvider>
  );
};

export default App;
