import React from 'react';

const Blogs = () => {
    return (
        <div className='w-[60%] mx-auto py-2 border-2 px-2 my-3 rounded-lg'>
            <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                <p className='text-xl font-semibold '>Difference between authorization and authentication</p>
                <div>
                    <p className='font-bold'>Authentication</p>
                    <p> (1)Authentication is the process of identifying a user to provide access to a system.</p>
                    <p> (2)In this, the user or client and server are verified.</p>
                    <p> (3)It is usually performed before the authorization.</p>
                    <p> (4)It requires the login details of the user, such as user name & password.</p>
                    <p> (5)Authentication credentials can be partially changed by the user as per the requirement.</p>
                </div>
                <div>
                    <p className='font-bold'>Authorization</p>
                    <p> (1)Authorization is the process of giving permission to access the resources.</p>
                    <p> (2)In this, it is verified that if the user is allowed through the defined policies and rules.</p>
                    <p> (3)It is usually done once the user is successfully authenticated.</p>
                    <p> (4)It requires the user's privilege or security level.</p>
                    <p> (5)Authorization permissions cannot be changed by the user.</p>
                </div>

            </div>
            <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                <p className='text-xl font-semibold'>Why are you using firebase?</p>
                <p>Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. As an Android developer I use Firebase in most of my projects. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics,Cloud Firestore,etc.</p>
                <p className='text-xl font-semibold'>What other options do you have to implement authentication?</p>
                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='border-2 px-5 pb-3 shadow rounded-lg'>
                <p className='text-xl font-semibold'>What other services does firebase provide other than authentication?</p>
                <p></p>

            </div>
        </div>
    );
};

export default Blogs;