import React from 'react'
import { useState } from 'react'



function Hamburger() {

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
    

    </>
  )
}

export default Hamburger
