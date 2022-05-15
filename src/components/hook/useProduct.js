import { useEffect, useState } from 'react';

const useProduct = (productId) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://damp-badlands-61750.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productId])
    return [products, setProducts];
};

export default useProduct;