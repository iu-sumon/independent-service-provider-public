import React from 'react';
import photo from '../../images/me/me.jpeg'
const About = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:pt-20 py-5 md:pb-20'>
             <div className='grid md:grid-cols-2  md:justify-center '>
                 <div className='md:order-1 order-2'>
                     <img className=' md:shadow-xl md:rounded-2xl w-[350px] h-[400px] mx-auto' src={photo} alt="" />
                  </div>
                  <div className='md:mr-20 text-white md:shadow-xl p-5 md:rounded-2xl md:order-2 order-1'>
                      <h1 className='text-center text-4xl pb-5'>Destination</h1>
                      <p className='text-xl'>This is Sumon. My first goal is to complete this course adequately. At the same time, I will  prepare myself for the job. In sha Allah, After getting the job, I would like to keep abreast of the latest technology as well as prepare for the IELTS and GRE. Above all, my goal is to prepare myself for getting the opportunity to work in a big tech giant company.</p>
                  </div>
             </div>
        </div>
    );
};

export default About;