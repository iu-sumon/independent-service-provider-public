import React from 'react';
import banner1 from '../../images/Banner/banner1.jpg'
import banner2 from '../../images/Banner/banner2.jpg'
import banner3 from '../../images/Banner/banner3.jpg'
import banner4 from '../../images/Banner/banner4.jpg'
const Banner = () => {
    return (
        <div className='bg-[#E4FAFF] md:h-[500px]'>
            <div className='flex justify-center items-center md:h-48'>
                <div >
                    <p className='md:text-5xl text-xl text-center mb-3 font-semibold'>Best Health Care For Your Family</p>
                    <p className='md:text-xl text-center p-3'>I will help you to feel better and enjoy every single day of your life.may be the fastest growing health</p>
                </div>
            </div>
            <div className='md:flex justify-center items-center md:gap-5 mx-auto'>
                <div className='border-2 border-stone-400 w-[300px] rounded-xl shadow ml-3 mb-3'>
                    <img className=' w-[300px] h-[200px] p-2 rounded-xl' src={banner1} alt="" />
                </div>
                <div  className='border-2 border-stone-400 w-[300px] rounded-xl shadow ml-3 mb-3'>
                    <img className=' w-[300px] h-[200px] p-2 rounded-xl'  src={banner2} alt="" />
                </div>
                <div  className='border-2 border-stone-400 w-[300px] rounded-xl shadow ml-3 mb-3'>
                    <img className=' w-[300px] h-[200px] p-2 rounded-xl' src={banner3} alt="" />
                </div>
                <div  className='border-2 border-stone-400 w-[300px] rounded-xl shadow ml-3 '>
                    <img className=' w-[300px] h-[200px] p-2 rounded-xl' src={banner4} alt="" />
                </div>
            </div>


        </div>
    );
};

export default Banner;