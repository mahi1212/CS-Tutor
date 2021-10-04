import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-primary text-dark py-4 text-secondary d-flex px-5'>
            <h1 className='text-warning cursor-pointer'>Computer Science </h1>
            <div className='ms-auto mt-2 pe-5'>
                <NavLink to="/home" className="text-white fs-5 text-decoration-none" activeClassName="border-bottom py-2">
                    Home
                </NavLink>
                <NavLink to="/services" className="text-white fs-5 text-decoration-none mx-3" activeClassName="border-bottom py-2">
                    Services
                </NavLink>
                <NavLink to="/review" className="text-white fs-5 text-decoration-none" activeClassName="border-bottom py-2">
                    Review
                </NavLink>
                <NavLink to="/about" className="text-white fs-5 text-decoration-none ms-3" activeClassName="border-bottom py-2">
                    About Us
                </NavLink>
            </div>
        </div>
    );
};

export default Header;