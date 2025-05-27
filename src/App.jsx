
import SideBar from './SideBar'
import { useLoaderData, useOutletContext } from 'react-router-dom';
import CardItem from './CardItem';
import { useState, useEffect } from 'react';



const App = () => {

  const { sedata } = useOutletContext();

  const [serchTerm, setSearchTerm] = useState("")

  const datas = useLoaderData()

  const [data, setData] = useState([]);

  useEffect(() => {
    if (sedata !== undefined) {
      setSearchTerm(sedata);
    }
  }, [sedata]);

  useEffect(() => {
    if (datas !== undefined) {
      setData(datas)
    }
  }, [datas])




  const filterDatas = data.filter((item) =>
    item.title.toLowerCase().includes(serchTerm.toLowerCase())
  );






  return (
    <div>
      <SideBar />

      <div className='flex items-center justify-end'>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 container mt-25 '>



          {
            filterDatas.length > 0 ? (
              filterDatas.map((da) => (
                <CardItem
                  key={da.id}
                  starrate={da.rating}
                  image={da.images[0]}
                  title={da.title}
                  price={da.price}
                  id={da.id}
                />
              ))
            ) : (
              <div className='w-full md:col-end-2 lg:col-span-4 xl:col-end-6 mt-5'>

                <div className='flex items-center justify-center flex-col'>
                  <p className='text-2xl md:text-4xl  tracking-wider title-line-1'>The {serchTerm} is not found.</p>
                  <div className='w-96 h-96'><img src="https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6604.jpg" alt="image" className='h-full w-full object-center object-cover' /></div>
                </div>
              </div>
            )
          }


        </div>
      </div>
    </div>
  )
}

export default App