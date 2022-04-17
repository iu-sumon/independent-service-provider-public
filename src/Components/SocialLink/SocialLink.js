import React from 'react';
import './SocialLink.css'
import google from '../../images/social icon/google.png'
import facebook from '../../images/social icon/facebook.png'
const SocialLink = () => {
    return (
        <div>
             <div className='social-login-section'>
                    <hr className='hr-line' />
                    <p>or</p>
                    <hr className='hr-line' />
                </div>

                <div className='social-icons'>
                    <img src={google} alt="" />
                    <img src={facebook} alt="" />
                </div>
        </div>
    );
};

export default SocialLink;