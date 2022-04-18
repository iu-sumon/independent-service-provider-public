import React, { useState } from 'react';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
const CheckOut = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    let getError;
    if (error) {

        getError = <p>Error: {error?.message}</p>


    }
    if (updating) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-10'>

            <div className="p-4 md:w-[30%] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto ">
                <form>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Patient Information</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input onBlur={(e) => setName(e.target.value)} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                        <input onBlur={(e) => setNumber(e.target.value)} type="number" name="number" id="number" placeholder="Enter your phone number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                        <input onBlur={(e) => setAddress(e.target.value)} type="text" name="address" id="address" placeholder="Enter your address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                        <input onBlur={(e) => setDescription(e.target.value)} type="text" name="description" id="description" placeholder="Write something of your problems" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <p className='text-center text-red-600'>{getError}</p>
                    <button

                        onClick={async () => {
                            await updateProfile({ name, email, number, address, description });
                            toast('Thanks for booking and Provide your information');
                        }}

                        className="w-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">Sumbit</button>

                </form>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default CheckOut;