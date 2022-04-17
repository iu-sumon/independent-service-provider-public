import React, { useState } from 'react';
import { async } from '@firebase/util';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import loginPhoto from '../../images/other/login.jpg'
import Loading from '../Loading/Loading';
import SocialLink from '../SocialLink/SocialLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword, user,loading,signInError] = useSignInWithEmailAndPassword(auth);
    
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
   
    
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const navigate = useNavigate()
    if(user)
    {
        navigate(from, { replace: true });
    }
    
    if(loading||sending)
    {
        return <Loading></Loading>
    }
    let getError;
   if(signInError || resetError )
   {
       getError=<p>Error:{signInError?.message} {resetError?.message}</p>
   }
   const handleResetPassword = async ()=>{

       if(email)
       {
        await sendPasswordResetEmail(email);
        toast('Sent email');
       }
       else{
           toast('Please Send Your Address')
       }
    
   }
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <h1 className='text-4xl text-center text-white  pt-3'>Welcome to Login Page</h1>
            <div className='py-20 flex justify-evenly items-center'>
                <div>
                    <img className='rounded-lg shadow-md  w-[500px] h-[600px]' src={loginPhoto} alt="" />
                </div>
                <div className="p-4 w-[500px] h-[600px] bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <htmlForm className="space-y-6" >
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Please Login</h5>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <button onClick={handleResetPassword} className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</button>
                        </div>
                        <p className='text-red-600 text-center'>{getError}</p>
                        <button onClick={(e) => { e.preventDefault(); signInWithEmailAndPassword(email, password) }} type="submit" className="w-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center pb-5">
                            Not registered? <Link to="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                        </div>
                    </htmlForm>
                    <SocialLink></SocialLink>
                    <ToastContainer></ToastContainer>
                </div>

            </div>
        </div>
    );
};

export default Login;