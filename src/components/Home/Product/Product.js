import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const { _id, name, img, description, price, supplier, quantity } = product;
    const navigate = useNavigate();


    const navigateToProductDetail = _id => {
        navigate(`/inventory/${_id}`);

    }


    return (
        <div className='product'>
            <CardGroup className="">
                <Card className='height login-form'>
                    <div className='text-center'>
                        <Card.Img className='w-50' variant="top" src={img} />
                    </div>
                    <Card.Body className='text'>
                        <Card.Title className='text-center fw-bold'>{name}</Card.Title>
                        <Card.Text >
                            {description}
                        </Card.Text>
                        <Card.Text>
                            Price: {price}
                        </Card.Text>
                        <Card.Text>
                            Supplier: {supplier}
                        </Card.Text>
                        <Card.Text>
                            Quantity: {quantity}
                        </Card.Text>
                    </Card.Body>

                    <button onClick={() => navigateToProductDetail(_id)} className='link-btn'>Update</button>

                </Card>

            </CardGroup>


        </div>
    );
};

export default Product;