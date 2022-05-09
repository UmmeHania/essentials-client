import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const { title, img, desc, price, supplier, quantity } = product;
    return (
        <div className='product border'>
            {/* <img className='w-100' src={img} alt="" />
            <h3 className='fw-bold'>{title}</h3>
            <p>{desc}</p>
            <h4>{price}</h4>
            <Link to='/checkout'><Button variant="primary">Update</Button></Link> */}

            <CardGroup className="">
                <Card className='w-100'>
                    <div className='text-center'>
                        <Card.Img className='w-50' variant="top" src={img} />
                    </div>
                    <Card.Body>
                        <Card.Title className='text-center fw-bold'>{title}</Card.Title>
                        <Card.Text >
                            {desc}
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