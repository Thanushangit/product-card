import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Star from './Star'

const SingleProduct = () => {

  const datas = useLoaderData()

  console.log(datas)
  return (
    <div className="h-full w-full  mt-25">

      <div className='container mx-auto flex flex-col md:flex-row gap-10  w-full'>

        <div className='w-full md:w-1/3'>

          <div className='flex items-center justify-center w-full h-full border border-gray-200 shadow'>
            <img src={datas.images[0]} alt="image" className='object-center object-cover' />
          </div>
        </div>



        <div className='w-full md:w-2/3 flex flex-col items-center'>

          <div className="w-full">
            <h1 className='text-5xl  text-black/60 my-4'>{datas.title}</h1>
            <div className=''>{<Star count={datas.rating}/>}</div>
            <div className='flex items-center  gap-0'>
              <div className='space-y-0 w-1/2'>
                <p className='uppercase text-gray-400 '>price</p>
                <h1 className='font-bold text-orange-600 text-2xl'>Rs:- {(datas.price * 150.78).toFixed(2)}</h1>
                <div className="mt-10 w-2/3">
                  <h1 className="text-lg  text-gray-400 uppercase">Description</h1>
                  <p className="text-gray-400 mt-1">{datas.description}</p>
                </div>
              </div>

              <div className='space-y-0 w-1/2'>
                <p className='uppercase text-gray-400 '>Quantity</p>
                <div className='flex items-center justify-evenly bg-gray-200 py-1 px-1 mt-1 rounded-full w-2/3'>

                  <button className='flex items-center justify-center h-8 w-8 rounded-full bg-gray-50 font-semibold text-lg text-gray-400 cursor-pointer'>+</button>
                  <input type="number" className='outline-0 w-15 text-xl font-bold ps-3 text-black/60' value={datas.stock} />
                  <button className='flex items-center justify-center h-8 w-8 rounded-full bg-gray-50 font-semibold text-lg text-gray-400 cursor-pointer'>-</button>

                </div>
                <div className=" w-2/3 mt-10">
                  <h1 className="text-lg  text-gray-400 uppercase">Details</h1>
                  <div className="flex items-start gap-8">
                    <div >
                      <p className="text-gray-400 whitespace-nowrap">Size (cm)</p>
                      <p className="text-gray-400 whitespace-nowrap">Weight</p>
                      <p className="text-gray-400 whitespace-nowrap">Warranty</p>
                      <p className="text-gray-400 whitespace-nowrap">Return-Policy</p>

                    </div>

                    <div >
                      <p className="text-gray-400 whitespace-nowrap"> {datas.dimensions.width.toFixed(1)} H x {datas.dimensions.height.toFixed(1)} W x {datas.dimensions.depth.toFixed(1)} D </p>
                      <p className="text-gray-400 whitespace-nowrap">{datas.weight}g</p>
                      <p className="text-gray-400 whitespace-nowrap">{datas.warrantyInformation}</p>
                      <p className="text-gray-400 whitespace-nowrap">{datas.returnPolicy}</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>


        </div>

      </div>

    </div>
  )
}

export default SingleProduct