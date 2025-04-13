import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';  
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/pizza/p001'} element={<Pizza />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/404'} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;