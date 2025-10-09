import React from 'react';
import { Link } from 'react-router';
import errorPage from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='max-w-11/12 mx-auto my-14'>
            <div className='flex justify-center'>
                <img src={errorPage} alt="" />
            </div>
            <div className='text-center space-y-2 my-5'>
                <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
                <p className='text-gray-400 mb-6'>The page you are looking for is not available</p>
                <Link className='py-3 px-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 rounded-lg text-white' to='/'>
                Go Back!</Link>
            </div>
        </div>
    );
};

export default ErrorPage;