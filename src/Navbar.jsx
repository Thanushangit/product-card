import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-black text-gray-300'>
            <div className='flex items-center justify-between gap-10 container'>
                <h1>Welcome</h1>
                <input type="text" className='outline-0 w-2xl py-2 px-5 rounded bg-gray-200 text-black text-lg' placeholder='Search here...' />
            </div>
        </div>
    )
}

export default Navbar