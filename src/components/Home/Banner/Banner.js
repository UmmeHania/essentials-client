import React from 'react';

import './Banner.css'
import home from '../../Assets/Home11.png'

const Banner = () => {
    return (
        <div className=''>
            <div className=''>
                <img className='banner' src={home} alt="" />
            </div>

        </div>
    );
};

export default Banner;