import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <hr />
            <h1 className='text-center fw-bold fs-1'>Our Products</h1>
            <Products></Products>
        </div>
    );
};

export default Home;