import { useState } from 'react'
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import MapPage from './components/MapPage/MapPage'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Registration from './components/Reg/Registration';
import Login from './components/Login/Login';
import AddPointe from './components/menus/addPoint/addPointe';
function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Map" element={<MapPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<AddPointe />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App