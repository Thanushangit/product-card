import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
const Star = ({ count }) => {

    const starArr = [];
    for (let i = 1; i <= 5; i++) {

        if (count >= i) {
            starArr.push(<FaStar key={i} className='text-yellow-500' />)
        } else if (count >= i - 0.5) {
            starArr.push(<FaStarHalfAlt key={i} className='text-yellow-500' />)
        } else {
            starArr.push(<FaRegStar key={i} className='text-yellow-500' />)
        }
    }

    return <div className="flex">{starArr}</div>;


}

export default Star