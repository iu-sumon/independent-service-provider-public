import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='md:mr-20'>

            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden text-white'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className={`md:flex justify-center absolute md:static  md:gap-4  bg-[#213162] font-mono ${open ? 'top-[100px] right-[0px] w-full' : 'top-[-160px]'}`}>

                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/services'>Services</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>

            </div>


        </nav>
    );
};

export default Navbar;