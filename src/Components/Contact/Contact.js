import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen'>
            <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-xl text-center md:text-3xl text-white pb-10'>
                        Please Contact Me Address Down Below
                    </h1>

                    <div className='flex justify-center items-center pb-5'>
                        <Link to='bd-address' type="button" className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">BD Address</Link>
                        <Link to='uk-address' type="button" className="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">UK Address</Link>
                    </div>
                    <div className='flex justify-center items-center w-full py-35'>
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
