import React from 'react';
import { Link} from 'react-router-dom';
import doctor from '../../images/other/smile-doctor.jpg'
const ServiceDetails = () => {
    
    return (
        <div>

            <div className='flex flex-col justify-center items-center px-4 py-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 width-full h-screen'>
                <div className='px-1 py-1 rounded-lg md:order-2 order-1 text-center'>
                    <img className='rounded-lg mb-10' src={doctor} alt="" />
                    <Link to='/checkout' className="py-3 px-20 mr-2 mb-2 text-md font-bold text-white focus:outline-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Check Out</Link>
                </div>
                <div className='md:order-1'>
                    <h1 className='md:text-[40px] text-2xl text-white  mb-10'>Thanks For Booking</h1>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;