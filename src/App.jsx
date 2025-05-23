import { useEffect, useState } from "react"
import { Link ,useOutletContext } from "react-router-dom"

const App = () => {


  const [fetchData, setFetchData] = useState([]);
  const [searchTerm] = useOutletContext() 



  useEffect(() => {

    async function FerchUrl() {

      try {
        const res = await fetch("https://dummyjson.com/products");

        if (!res.ok) {
          throw new Error("fetching data problem")
        }
        const result = await res.json()
        setFetchData(result.products)


      } catch (err) {

        console.log("console error ")

      }

    }

    FerchUrl()
  }, [])



const filteredData = fetchData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )


  function ProductItem({pro}) {
   return(
     <div>
      <div className='border border-gray-400 shadow cursor-pointer rounded-md'>
        <div className='h-56 w-full relative'>
          <img src={pro.thumbnail} alt="image" className='h-full w-full object-center object-cover ' loading='lazy' />

          <div className='flex items-center justify-between w-full gap-10  absolute top-5 right-0 px-5 '>
            <p className='bg-purple-500 rounded p-1 text-white'>{pro.discountPercentage}%</p>
            <p className={`${(pro.availabilityStatus==="In Stock"?"bg-green-500":"bg-red-500")} rounded p-1 text-white`}>{pro.availabilityStatus}</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center text-center my-2'>
          <h1 className='text-xl font-semibold'>{pro.title}</h1>
          <p className='text-lg my-2'>${pro.price}</p>

        </div>
      </div>
    </div>
   )
  }



  return (


    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 gap-x-5 mt-10 mb-5 mx-auto mt-25'>

      {
        filteredData.map((da)=>(
          <Link key={da.id} to={da.id.toString()}>

            <ProductItem pro={da}/>
          </Link>
        ))
      }

    </div>

  )
}

export default App