import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark text-white py-3 px-5'>
            <div className="row">
                <div className="col-md-4">
                    <h2 className='ms-3 text-warning'>Why Us ? </h2>
                    <ul>
                        <li>We Provide best services</li>
                        <li>We Provide live classes</li>
                        <li>We Provide best tutors</li>
                        <li>We Provide online classes</li>
                    </ul>
                </div>
                <div className="col-md-4 mt-5 text-center">
                    <p className='mt-5'> Made by M Rahman Mahi</p>
                </div>
                <div className="col-md-4 ">
                    <h2 className='text-center'>Contact Us</h2>
                    <p className='ms-5 fs-5'>
                        <Link to='https://web.programming-hero.com/'>Website</Link>
                        <br />
                        <Link to='https://github.com/mahi1212'>Github</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;