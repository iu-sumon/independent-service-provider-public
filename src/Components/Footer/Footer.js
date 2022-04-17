import React from 'react';
import { Link } from 'react-router-dom';

 const Footer = () => {
    return (
        <div>

            <footer className="p-4 bg-[#213162] md:px-6 md:py-8 dark:bg-gray-800">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0">
                        
                            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white"><i className="fa-solid fa-briefcase-medical mr-2"></i> MY DOCTOR</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-md text-white sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span className="block text-md text-white sm:text-center dark:text-gray-400">© 2022
                    <Link to="/" className="hover:underline"> My Doctor</Link>. All Rights Reserved.
                    </span>
            </footer>

        </div>
    );
};

export default Footer;