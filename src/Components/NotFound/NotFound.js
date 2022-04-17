import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-20'>
            <div>
                <h1 className='md:text-[200px] text-5xl font-extrabold text-cyan-500'>404</h1>
                <p className='text-center'> OPPS! PAGE NOT FOUND </p>
                <p className='text-center'>Sorry, the page you're looking for doesn't exist.</p>
            </div>
             <div className='mt-5'>
             <Link to='/' type="button" className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full border border-gray-400 hover:bg-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Return To Home</Link>
             </div>
        </div>
    );
};

export default NotFound;