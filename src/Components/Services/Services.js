import React from 'react';
import useService from '../../hooks/useService';
import icon from '../../images/logo/title-icon-1.png'
import Service from '../Service/Service';
const Services = () => {
    const [services] = useService()
    return (
        <div className='bg-[#E9F2EB] py-10'>
            <div className='flex flex-col justify-center items-center pt-10'>
                <p className='text-2xl font-mono font-bold'>Doctor Services</p>
                <img src={icon} alt="" />

            </div>
             <div className='grid md:grid-cols-3 justify-center items-center w-[80%] mx-auto gap-5 my-10'>
                 {
                     services.map(service=><Service
                     service={service}
                     key={service.id}
                     ></Service>)
                 }
             </div>

        </div>
    );
};

export default Services;