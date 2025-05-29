
import { Link } from 'react-router-dom';
import Star from './Star';

const CardItem = ({ image = "https://thumbs.dreamstime.com/b/delivery-box-intriguing-black-question-mark-solid-white-background-symbolizing-uncertainty-curiosity-open-349904319.jpg", title = "item", price = "idk", id, starrate = 1, category = "unknown" }) => {



    function CategoryHandle(val) {
        if (val !== "unknown") {
            const firstLetter = val.charAt(0).toUpperCase();
            const finalCategory = firstLetter + val.slice(1);
            return finalCategory;
        }
    }






    return (
        <Link to={id.toString()} >
            <div title={title} className='border border-gray-200 shadow hover:shadow-2xl duration-500 transition-all'>
                <div className='h-44 w-full overflow-hidden rounded-t'>
                    <img src={image} alt="image" className='w-full h-full object-center object-cover transition-all duration-700 hover:scale-110' />
                </div>
                <div className='px-2 py-4'>
                    <h1 className='text-lg font-semibold title-line-1'>{title}</h1>
                    <div className='font-semibold text-lg my-1'>{<Star count={starrate} />}</div>
                    <div className='flex md:items-center md:justify-between gap-x-2 flex-col md:flex-row'>
                        <h1 className='font-bold text-xl'>Rs:-{parseFloat((price * 150.78).toFixed(2))
                        }
                        </h1>
                        <p className='title-line-1 text-gray-500'>{CategoryHandle(category)}</p>
                    </div>


                </div>
            </div>
        </Link>
    )
}

export default CardItem