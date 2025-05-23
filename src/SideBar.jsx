import React, { useState } from 'react'

const SideBar = () => {

    const [rate,setRate]=useState(3)
    return (
        <div className='fixed left-0 top-25 h-fit container z-10'>
            <div className='flex items-center gap-3 border-b-2 border-gray-300  p-2 max-w-44'>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z" /></svg></p>
                <h1 className='text-xl font-semibold'>Filters</h1>
            </div>

            <div className=' border-b-2 border-gray-300  p-2 max-w-44'>
                <h1 className='text-lg mb-3'>Categories</h1>
                <label htmlFor="All" className='flex items-center gap-3'>
                    <input type="radio" name='category' id='All' />
                    All
                </label>
                <label htmlFor="Beauty" className='flex items-center gap-3'>
                    <input type="radio" name='category' id='Beauty' />
                    Beauty
                </label>
                <label htmlFor="Fragrances" className='flex items-center gap-3'>
                    <input type="radio" name='category' id='Fragrances' />
                    Fragrances
                </label>
                <label htmlFor="Furniture" className='flex items-center gap-3'>
                    <input type="radio" name='category' id='Furniture' />
                    Furniture
                </label>
                <label htmlFor="Groceries" className='flex items-center gap-3'>
                    <input type="radio" name='category' id='Groceries' />
                    Groceries
                </label>
            </div>

            <div className=' border-b-2 border-gray-300  p-2 max-w-44'>

                <h1 className='text-lg mb-3'>Sort By</h1>
                <label htmlFor="sort" className='flex items-center gap-3'>
                    <input type="radio"  name='sort' id='sort'/>
                    Low-To-High
                </label>

                <label htmlFor="sort" className='flex items-center gap-3'>
                    <input type="radio"  name='sort' id='sort'/>
                    High-To-Low
                </label>

            </div>

            <div className=' border-b-2 border-gray-300  p-2 max-w-44'>
                <h1 className='text-lg mb-3'>Rating</h1>
                <label htmlFor="rating" className='flex items-center gap-3'>
                    <input type="range" min={1.00} max={5.00} step={0.1} value={rate} onChange={(e)=>setRate(e.target.value)} />

                   <p className='font-semibold'> {rate}</p>
                </label>
            </div>
        </div>
    )
}

export default SideBar 