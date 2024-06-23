import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>
                                Free Shipping $100 & Free Returns
                            </p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                Hotline: <a href="tel: +90 5331609629">
                                    +90 5331609629
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header