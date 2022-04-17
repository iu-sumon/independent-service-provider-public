import React, { useState } from 'react';
import { async } from '@firebase/util';
import { Link, useNavigate } from 'react-router-dom';
import SocialLink from '../SocialLink/SocialLink';
import signupPhoto from '../../images/other/signup.jpg'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
 const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userError, setUserError] = useState('')

    const [createUserWithEmailAndPassword, loading, createError] = useCreateUserWithEmailAndPassword(auth, { emailVerificationOptions: true });
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    let getError;

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (createError || updatingError) {
        getError = <p>Error:{createError?.message} {updatingError?.message}</p>
    }
     

    const handleSignUp = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setUserError('Password did not match!')
            return;
        }
        if (password.length < 6) {
            setUserError('Password must be 6 character or longer.')
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        await updateProfile(updateProfile({ displayName: name }))
        navigate('/')
    }

    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <h1 className='text-4xl text-center text-white  pt-3'>Welcome to SignUp Page</h1>
            <div className='py-20 flex justify-evenly items-center'>
                <div>
                    <img className='rounded-lg shadow-md  w-[600px] h-[750px]' src={signupPhoto} alt="" />
                </div>
                <div className="p-4 w-[600px] h-[750px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={handleSignUp}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Please SignUp</h5>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input onBlur={(e) => setName(e.target.value)} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                            <input onBlur={(e) => setConfirmPassword(e.target.value)} type="password" name="confirm-password" id="confirm-password" placeholder="confirm password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300">I agree with the terms and conditions</label>
                                </div>
                            </div>

                            <p className='text-red-600 text-center'>{userError}</p>
                            <p className='text-red-600 text-center'>{getError}</p>

                        </div>
                        <button type="submit" className="w-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center pb-5">
                            Already have an account?<Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500 pl-2">Please Login</Link>
                        </div>
                    </form>
                    <SocialLink></SocialLink>
                    
                </div>

            </div>
        </div>
    );
};

export default SignUp;