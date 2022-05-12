import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useProduct from '../hook/useProduct';
import Product from '../Home/Product/Product';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [products, setProducts] = useProduct();
    return (
        <div>
            <div className="products-container row row-cols-1 row-cols-md-3 g-4 mb-3">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>



            <DeleteForeverIcon className='text-danger fs-1'></DeleteForeverIcon>
        </div>
    );
};

export default ManageItems;

