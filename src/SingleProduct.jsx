import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {


  const [singleData, setSingleData] = useState(null)
  

  const params = useParams()

  useEffect(() => {

    async function FerchUrl() {

      try {
        const res = await fetch(`https://dummyjson.com/products/${params.id}`);

        if (!res.ok) {
          throw new Error("fetching data problem")
        }
        const result = await res.json()
        setSingleData(result)


      } catch (err) {

        console.log("console error ")

      }

    }

    FerchUrl()



  }, [])





  return (
    <div>

      {singleData && <div className='flex items-center justify-between container gap-8 mt-25'>

        <div className='w-1/2 h-[70vh]'>
          <img src={singleData.images} alt="image"  loading='lazy' className='w-full h-full object-center object-cover shadow'/>
        </div>

        <div className='w-1/2 px-10 flex flex-col gap-3'>

        <h1 className='text-2xl font-semibold'>{singleData.title}</h1>
        <div>
          <h1 className='text-lg font-semibold'>Description</h1>
          <p>{singleData.description}</p>
        </div>

        <div className='flex items-center gap-20 mt-2'>
          <h1 className='font-bold text-3xl'>{singleData.price}$</h1>
          <div className='bg-black/50 text-gray-200 py-3 px-4 font-bold'>Add to Cart</div>
        </div>

        </div>
      </div>}


    </div>
  )
}

export default SingleProduct