import React, { useEffect, useState } from 'react';
import Product from '../Product/Product'



const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='container'>

            <div className="products-container row row-cols-1 row-cols-md-3 g-4 mb-3">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;
