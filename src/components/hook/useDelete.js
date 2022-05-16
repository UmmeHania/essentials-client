import React from 'react';
import useProduct from './useProduct';

const useDelete = () => {
    const [products, setProducts] = useProduct();
    const handleDelete = id => {
        const proceed = window.confirm('Delete this product forever?');
        if (proceed) {
            const url = `https://damp-badlands-61750.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })
        }
    }
    return [handleDelete];
};

export default useDelete;