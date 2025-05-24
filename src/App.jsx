
import SideBar from './SideBar'
import { useLoaderData } from 'react-router-dom';
import CardItem from './CardItem';



const App = () => {

  const datas=useLoaderData()

  


  return (
    <div>
      <SideBar/>

      <div className='flex items-center justify-end'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 container mt-25 '>

        {
          datas.map((da) => (
            <CardItem key={da.id} starrate={da.rating} image={da.images[0]} title={da.title} price={da.price} /> 
          ))
        }

      </div>
    </div>
    </div>
  )
}

export default App