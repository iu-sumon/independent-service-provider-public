import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const Header = () => {
    return (
        <header className='flex justify-between items-center py-7 bg-[#161E35] w-full'>
            <h3 className='text-3xl font-bold md:ml-20 ml-2 text-white font-mono'>
                <Link to='/' ><i className="fa-solid fa-briefcase-medical mr-2"></i>My Doctor</Link>
            </h3>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;