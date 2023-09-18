import React from 'react'
import "./MyMain.css"
import firstPic from '../assets/firstImage.png'
import secondPic from '../assets/secondImage.png'
import { useState } from 'react'
import leftArrow from "../assets/arrowRight.svg"
import { Link } from 'react-router-dom'
import Nav from './Nav'
import "./responsive.css"

function Home({pageManager,setPageManger}) {


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

<section className='left'>

<h1 className='logo'>Davia.</h1>

<p className='stack'>UI/UX DESIGNER & DEVELOPER</p>

<p className='open'>I'm David</p>

<button className='moreAboutMe'>More About Me <img src={leftArrow} alt=""  className='arrowLeft' /></button>

<button className='hireMe'>Hire Me  <img src={leftArrow} alt=""  className='arrowLeft'/></button>

<p className='copyRight'>Copyright ©2023 All rights reserved</p>

</section>

<section className='right'>

<img src={firstPic} alt="" className='firstPic'/>
 <img src={secondPic} alt="" className='secondPic'/>

 <Nav/>
 
</section>


     </>
  )
}

export default Home
