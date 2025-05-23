import React from 'react'

const Navbar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='bg-black text-gray-300 fixed top-0 right-0 w-full z-10 '>
            <div className='flex items-center justify-between gap-10 container'>
                <h1>Welcome</h1>
                <input type="text" className='outline-0 w-2xl py-2 px-5 rounded bg-gray-200 text-black text-lg' placeholder='Search here...' name='search'  value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}  />
            </div>
        </div>
    )
}

export default Navbar