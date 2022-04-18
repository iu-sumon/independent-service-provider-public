import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const [open, setOpen] = useState(false)


    return (
        <nav className='md:mr-20'>

            <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden text-white'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className={`md:flex justify-center items-center absolute md:static  md:gap-4  bg-[#213162] font-mono ${open ? 'top-[100px] right-[0px] w-full' : 'top-[-160px]'}`}>

                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/services'>Services</CustomLink>
                <CustomLink to='/review'>Reviews</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                {
                    user ?
                        <CustomLink onClick={() => signOut(auth)} to='/login'>SignOut</CustomLink>
                        :

                        <CustomLink to='/login'>Login</CustomLink>}

            </div>


        </nav>
    );
};

export default Navbar;