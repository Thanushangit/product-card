import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {

  const [sedata,setSedata]=useState();

  const Handle=(val)=>{
    setSedata(val)
  }
  return (
    <div>
      <Navbar onSearch={Handle} />
      <Outlet context={{sedata}}/>
    </div>
  )
}

export default RootLayout