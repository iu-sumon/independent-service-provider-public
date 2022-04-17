import React from 'react';
import photo from '../../images/me/Sumon.jpeg'
const About = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-20 h-screen'>
             <div className='grid grid-cols-2  justify-center md:w-[70%]  m-auto'>
                 <div className='border-2 p-3 rounded-2xl shadow-lg w-[320px] m-auto'>
                     <img className='w-[320px] h-[400px] rounded-2xl' src={photo} alt="" />
                  </div>
                  <div className='pt-20 text-white'>
                      <h1 className='text-center text-4xl'>Destination</h1>
                      <p className='text-xl'>This is Sumon. My first goal is to complete this course adequately. At the same time, I will  prepare myself for the job. In sha Allah, After getting the job, I would like to keep abreast of the latest technology as well as prepare for the IELTS and GRE. Above all, my goal is to prepare myself for getting the opportunity to work in a big tech giant company.</p>
                  </div>
             </div>
        </div>
    );
};

export default About;