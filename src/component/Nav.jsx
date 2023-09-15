import React from 'react'
import { useState } from 'react'
import "./MyMain.css"
import { Link } from 'react-router-dom'

function Nav() {

    const[open , setOpen] = useState(false)
  
    function handleclick(){
      if(open){
        setOpen(false)
      }
      else{
        setOpen(true)
      }
    }


  return (
    <>
      {!open && <section className='HamBOpen' onClick={handleclick} >
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </section>}

      {open && <section className='HamBClose' onClick={handleclick}>
        <div className='lineA'></div>
        <div className='lineB'></div>
      </section>}

      {open && <ul>

       <li  className='home'><Link to="/"  className='home'>Home</Link></li>
       
        <li  className='home'><Link to="/About"  className='home'>About</Link></li>
        
        <li  className='home'><Link to="/Services" className='home'>Services</Link></li>
       
        <li  className='home'><Link to="/Experiences"  className='home'>Experiences</Link></li>
       
        <li  className='home'><Link to="/Works"  className='home'>Works</Link></li>
    
       <li  className='home'> <Link to="/Contact"  className='home'>Contact</Link></li>
      </ul>}
    </>
  )
}

export default Nav
