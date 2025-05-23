import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import { useState } from "react"

const RootLayout = () => {

   const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Outlet context={[searchTerm]}/>

    </div>
  )
}

export default RootLayout