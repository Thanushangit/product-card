import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const App = () => {


consr [fetchData,setFetchData]=useState([])



useEffect(()=>{

async function FerchUrl(){

  try{
    const res= await fetch("")

  }catch(err){

  }

}

},[])






  function ProductItem() {
    <div>
      <div className='border border-gray-400 shadow cursor-pointer rounded-md'>
        <div className='h-56 w-full relative'>
          <img src="https://www.jiomart.com/images/product/original/rvlclhme0d/hersay-hair-removal-cream-for-women-girls-for-smooth-moisturised-skin-made-with-shea-butter-rose-oil-hair-remover-cream-for-underarms-hands-legs-private-parts-painless-depilatory-cream-sensitive-formula-suitable-for-all-skin-types-pack-of-3-product-images-orvlclhme0d-p602828563-4-202306291222.jpg?im=Resize=(420,420)" alt="image" className='h-full w-full object-center object-cover ' loading='lazy' />

          <div className='flex items-center justify-between w-full gap-10  absolute top-5 right-0 px-5 '>
            <p className='bg-purple-500 rounded p-1 text-white'>-50%</p>
            <p className='bg-green-500 rounded p-1 text-white'>In stock</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center text-center my-2'>
          <h1 className='text-xl font-semibold'>Girls creame</h1>
          <p className='text-lg my-2'>$15</p>

        </div>
      </div>
    </div>
  }



  return (


    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 gap-x-5 mt-10 mb-5'>

    </div>

  )
}

export default App