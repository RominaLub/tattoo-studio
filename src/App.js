import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx"
import Contact from "../src/components/Contact/Contact.jsx"

function App() {
  return (
    <div className="App">
      <Navbar/>
        <div className='AppNavbar'>
          <Routes>
            <Route path='' element={<Contact/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
