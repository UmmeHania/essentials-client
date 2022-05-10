import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const { name, img, description, price, supplier, quantity } = product;
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

                    <button className='btn btn-primary'>Update</button>

                </Card>

            </CardGroup>


        </div>
    );
};

export default Product;