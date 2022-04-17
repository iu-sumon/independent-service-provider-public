import React from 'react';
import './SocialLink.css'
import google from '../../images/social icon/google.png'
import facebook from '../../images/social icon/facebook.png'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
 
const SocialLink = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate()

    if (googleLoading || facebookLoading) {
        return <Loading></Loading>
    }
    if (googleUser || facebookUser) {
        navigate('/')
    }
    let getError;
    if (googleError || facebookError) {

        getError = <p>Error:{googleError?.message} {facebookError?.message}</p>
    }

    return (
        <div>
            <p className='text-red-600 text-center'>{getError}</p>
            <div className='social-login-section'>
                <hr className='hr-line' />
                <p>or</p>
                <hr className='hr-line' />
            </div>

            <div className='social-icons'>
                <img onClick={() => signInWithGoogle()} src={google} alt="" />
                <img onClick={() => signInWithFacebook()} src={facebook} alt="" />
            </div>

             
        </div>
    );
};

export default SocialLink;