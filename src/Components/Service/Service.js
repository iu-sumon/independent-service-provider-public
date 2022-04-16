import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, price, comment } = service;
    return (
        <div>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg p-3" src={img} alt="" />

                <div className="p-5 text-center">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" title={comment}>{comment.length > 200 ? comment.slice(0, 200) +'...Read More' : comment}</p>

                    <Link to="/login" className="inline-flex items-center py-3 px-20 text-sm font-medium text-center text-white focus:outline-none bg-[#213162] rounded-full border border-gray-200 hover:bg-blue-500  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Book Now
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;