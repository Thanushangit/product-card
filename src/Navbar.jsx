

const Navbar = ({onSearch}) => {
  

  const Handler = async (e) => {
    const value = e.target.value;
      onSearch(value);
    

  }

 
  return (
    <div className='bg-black text-gray-200 fixed top-0 right-0 w-full z-50 '>

      <div className='container flex items-center gap-10'>

        <h1 className='text-3xl font-semibold '>Plazy Store</h1>

        <input type="search" className='bg-gray-200 rounded-full px-4 py-2 text-gray-800 text-lg outline-0 w-lg mx-auto' placeholder='Search here...'  onChange={Handler} />


      </div>

    </div>
  )
}

export default Navbar