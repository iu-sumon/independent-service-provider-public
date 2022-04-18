import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {
    const[reviews]=useReviews()
    return (
        <div className='bg-[#161E35] py-5'>
        <h1 className='text-4xl text-white text-center'>Patient Reviews</h1>
        <div className='grid md:grid-cols-3 justify-center items-center w-[70%] mx-auto gap-5 my-10 border-2 px-3 py-3 rounded'>
            {
                reviews.map(review => <ReviewCart
                    review={review}
                    key={review.id}

                ></ReviewCart>)
            }
        </div>    
        </div>
    );
};

export default Reviews;