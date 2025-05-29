import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet, Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

const RootLayout = () => {

  const [sedata, setSedata] = useState();

  const Handle = (val) => {
    setSedata(val)
  }
  return (
    <div>
      <Navbar onSearch={Handle} />
      <Outlet context={{ sedata }} />

      <footer className='mb-2 text-gray-600  border-t-2 border-gray-200 pt-2 mt-8 flex items-center justify-center gap-1'>
        copyright &copy;{new Date().getFullYear()} All rights reserved S.Thanushan
        <Link to="https://github.com/Thanushangit/product-card" title='Soure Code' target='_blank'>
          <p className='hover:text-blue-500 transition-all duration-300'><FaGithub /></p>
        </Link>
      </footer>
    </div>
  )
}

export default RootLayout