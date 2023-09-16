import React from 'react'
import "./App.css"

import Home from "./component/Home";
import { useState } from 'react'; // that's how we call it into a particular component
import mypic from './assets/FB_IMG_16914035241601658.jpg'
import FirstSide from './component/LeftSide';
import Hamburger from './component/hamburger';
import About from './pages/About';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import Services from './pages/Services';
import Works from './pages/works';
import { Route, Routes } from "react-router-dom"

function App() {
  return(
  <div>
  <Routes>
  <Route path="/" element ={<Home/>}/>
  <Route path="About" element ={<About/>}/>
  <Route path="Contact" element ={<Contact/>}/>
  <Route path="Experiences" element ={<Experiences/>}/>
  <Route path="Services" element ={<Services/>}/>
  <Route path="Works" element ={<Works/>}/>
    </Routes>
    </div>
  )
  
   
}

export default App
