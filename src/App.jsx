import SideBar from './SideBar';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import CardItem from './CardItem';
import { useState, useEffect } from 'react';

const App = () => {
  const { sedata } = useOutletContext(); // search input from parent route (if any)
  const [searchTerm, setSearchTerm] = useState('');
  const rawData = useLoaderData(); // loaded data from loader
  const [data, setData] = useState([]);
  const [sideBarData, setSideBarData] = useState({});

  useEffect(() => {
    if (sedata !== undefined) {
      setSearchTerm(sedata);
    }
  }, [sedata]);

  useEffect(() => {
    if (rawData !== undefined) {
      setData(rawData);
    }
  }, [rawData]);

  const handleSidebarData = (formData) => {
    setSideBarData(formData);
  };

  const getFilteredData = () => {
    let filtered = [...data];

    // Filter by category
    if (sideBarData.category && sideBarData.category !== 'All') {
      filtered = filtered.filter(item =>
        item.category.toLowerCase() === sideBarData.category.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by rating
    if (sideBarData.range) {
      filtered = filtered.filter(item =>
        item.rating >= parseFloat(sideBarData.range)
      );
    }

    // Sort by price
    if (sideBarData.sort === 'Low-To-High') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sideBarData.sort === 'High-To-Low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const filteredData = getFilteredData();

  return (
    <div className=' flex sm:static items-start  justify-between gap-10  mt-35 md:mt-30'>
      <div className='w-1/5 '>
        <SideBar sideBarData={handleSidebarData} />
      </div>

      <div className='flex items-center justify-end  w-4/5 md:w-full '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 container'>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <CardItem
                key={item.id}
                starrate={item.rating}
                image={item.images[0]}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            ))
          ) : (
            <div className='w-full md:col-end-2 lg:col-span-4 xl:col-end-6 mt-5'>
              <div className='flex items-center justify-center flex-col'>
                <p className='text-2xl md:text-4xl tracking-wider title-line-1 py-2'>
                  The {searchTerm || sideBarData.category} is not found.
                </p>
                <div className='w-96 h-96'>
                  <img
                    src='https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6604.jpg'
                    alt='no-results'
                    className='h-full w-full object-center object-cover'
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default App;
