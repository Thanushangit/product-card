import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MdMenuOpen } from "react-icons/md";

const SideBar = ({ sideBarData }) => {
    const { register, watch } = useForm({
        defaultValues: {
            category: "All",
            sort: "Low-To-High",
            range: 3.0
        }
    });

    // ✅ Watch all input fields
    const watchAllFields = watch();


    const rangeValue = watch("range");

    // ✅ useEffect to send data to App only when values change
    useEffect(() => {
        sideBarData(watchAllFields);
    }, [JSON.stringify(watchAllFields)]); // ✅ This prevents infinite loop
    

    return (
        <div className='fixed top-30 left-0 sm:w-fit container z-10 w-full accent-blue-500 '>
            <div className='flex items-center gap-3 justify-between border-b-2 border-gray-300 p-2'>
                <h1 className='text-xl font-semibold'>Filters</h1>
               

            </div>

            <form>
                {/* Categories */}
                <div className='border-b-2 border-gray-300 p-2'>
                    <h1 className='text-lg mb-3'>Categories</h1>
                    {["All", "Beauty", "Fragrances", "Furniture", "Groceries", "Electronic"].map((cat) => (
                        <label key={cat} className='flex items-center gap-3'>
                            <input
                                type="radio"
                                name="category"
                                value={cat}
                                {...register("category")}
                            />
                            {cat}
                        </label>
                    ))}
                </div>

                {/* Sort */}
                <div className='border-b-2 border-gray-300 p-2'>
                    <h1 className='text-lg mb-3'>Sort By</h1>
                    {["Low-To-High", "High-To-Low"].map((sortType) => (
                        <label key={sortType} className='flex items-center gap-3'>
                            <input
                                type="radio"
                                name="sort"
                                value={sortType}
                                {...register("sort")}
                            />
                            {sortType}
                        </label>
                    ))}
                </div>

                {/* Rating */}
                <div className='border-b-2 border-gray-300 p-2'>
                    <h1 className='text-lg mb-3 flex items-center gap-2'>Rating <span className='inline-block h-fit'>{rangeValue}</span></h1>
                    <label className='flex items-center gap-3'>
                        <input
                            type="range"
                            min={1}
                            max={5}
                            step={0.1}
                            {...register("range")}
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default SideBar;
