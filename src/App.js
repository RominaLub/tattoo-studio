import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/Header.jsx"
import NavBar from "../src/components/Navbar.jsx"
import Footer from "../src/components/Footer.jsx"
import Home from "../src/components/Home/Home.jsx"
import Contact from "../src/components/Contact/Contact.jsx"
import Gallery from "../src/components/Gallery/Gallery.jsx"
import Questions from "../src/components/Q&A/Questions.jsx"
import AGB from "../src/components/Dashboard/AGB.jsx"


function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <div className="main-container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/questions' element={<Questions/>}/>
        </Routes>
      </div>
        <Routes>
          <Route path='/agb' element={<AGB/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
