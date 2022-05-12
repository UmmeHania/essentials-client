import React, { useEffect, useState } from 'react';
import useProduct from '../../hook/useProduct';
import Product from '../Product/Product'



const Products = () => {
    const [products, setProducts] = useProduct()

    return (
        <div className='container'>

            <div className="products-container row row-cols-1 row-cols-md-3 g-4 mb-3">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;
