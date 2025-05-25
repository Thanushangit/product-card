import { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CardItem = ({ starrate = 1, image = "https://thumbs.dreamstime.com/b/delivery-box-intriguing-black-question-mark-solid-white-background-symbolizing-uncertainty-curiosity-open-349904319.jpg", title = "item", price = "idk" , id}) => {

    const [star] = useState(starrate)
    const starArr = [];

    function GenerateStart() {

        for (let i = 1; i <= 5; i++) {

            if (star >= i) {
                starArr.push(<FaStar key={i} className='text-yellow-500' />)
            } else if (star >= i - 0.5) {
                starArr.push(<FaStarHalfAlt key={i} className='text-yellow-500' />)
            } else {
                starArr.push(<FaRegStar key={i} className='text-yellow-500' />)
            }
        }

        return <div className="flex">{starArr}</div>;

    }




    return (
        <Link to={id.toString()} >
            <div className='border border-gray-200 shadow hover:shadow-2xl duration-500 transition-all'>
                <div className='h-44 w-full overflow-hidden rounded-t'>
                    <img src={image} alt="image" className='w-full h-full object-center object-cover transition-all duration-700 hover:scale-110' />
                </div>
                <div className='px-2 py-4'>
                    <h1 className='text-lg font-semibold'>{title}</h1>
                    <div className='font-semibold text-lg my-1'>{GenerateStart()}</div>
                    <h1 className='font-bold text-xl'>Rs:-{parseFloat((price * 150.78).toFixed(2))
                    }
                    </h1>

                </div>
            </div>
        </Link>
    )
}

export default CardItem