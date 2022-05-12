import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateInventory = () => {
    const { id } = useParams();

    const [itemQuantity, setItemQuantity] = useState(0);
    setItemQuantity(product?.quantity);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct([data]));
    }, [itemQuantity]);

    const deliveredItem = () => {
        const quantity = (parseInt(product?.quantity) - 1);
        console.log(quantity);
        setItemQuantity(quantity);
        const updatedItem = { quantity };

        // send data to server
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Item updated successfully');
                console.log('updatedItem ', updatedItem);
                setItemQuantity(quantity);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const handleRestockItems = event => {
        event.preventDefault();
        const quantity = parseInt(product?.quantity) + parseInt(event.target.quantity.value);
        console.log(quantity);
        const updatedItem = { quantity };

        // send data to server
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Item updated successfully');
                event.target.reset();
                console.log('updatedItem ', updatedItem);
                setItemQuantity(quantity);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className='mt-4 d-flex justify-content-around'>
            <div className="card" style={{ width: "18rem" }}>
                <img className='w-100' src={product?.img} alt="" />
                <div className="card-body">
                    <h5 className="card-title mb-4">{product?.name}</h5>
                    <p>Id: {id}</p>
                    <p>Supplier Name: {product?.supplier}</p>
                    <p>Price: {product?.price}</p>
                    <p>Quantity: {itemQuantity}</p>
                    <p>Sold: {product?.sold}</p>
                    <p className="card-text">{product?.description}</p>
                    <button onClick={deliveredItem} className='btn btn-dark'>Delivered</button>
                </div>
            </div>
            <div>
                <div className='p-4 bg-info' style={{ height: "200px" }}>
                    <h2>Restock The Items</h2>
                    <form onSubmit={handleRestockItems}>
                        <input className='w-100 mb-2' type="number" name='quantity' placeholder='Quantity you want to restock' required />
                        <br />
                        <input className='btn btn-dark' type="submit" value="Restock" />
                    </form>
                </div>
                <div className='my-5 d-flex justify-content-center'>
                    <button className='btn btn-dark'>Manage Inventories</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;