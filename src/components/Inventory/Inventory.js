import { CCard, CCardBody, CCardFooter, CCardGroup, CCardImage, CCardText, CCardTitle } from '@coreui/react';
import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Product from '../Home/Product/Product';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])


    return (

        <div>
            <div className='container w-50 mx-auto login-form mt-3 mb-3'>
                <h2 className='text-center fw-bold'>Product Details</h2>
                <hr />

                <Table striped bordered hover responsive>
                    <div className='mx-auto text-center mx-5'>
                        <img className='w-50' src={product?.img} alt="" />
                    </div>

                    <tbody>
                        <tr>
                            <td colSpan={1}>Product ID</td>
                            <td colSpan={3}>{id}</td>

                        </tr>
                        <tr>
                            <td colSpan={1}>Product Name</td>
                            <td colSpan={3}>{product?.name}</td>

                        </tr>

                        <tr>
                            <td colSpan={1}>Description</td>
                            <td colSpan={3}>{product?.description}</td>
                        </tr>

                        <tr>
                            <td colSpan={1}>Supplier</td>
                            <td colSpan={3}>{product?.supplier}</td>
                        </tr>
                        <tr>
                            <td colSpan={1}>Quantity</td>
                            <td colSpan={3}>{product?.quantity}</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
            <div className='d-flex justify-content-center'>

                <button className='link-btn mx-3'>Delivered</button>
                <input className='mx-2' type="number" name="" id="" />
                <button className='link-btn'>Restock</button>
            </div>
            <div className='text-center'>
                <button className='link-btn mt-4'>
                    <h5 className=''><Link className='manage-text' to='/inventory'>Manage inventories <ArrowCircleRightIcon className='fs-3'></ArrowCircleRightIcon></Link></h5>
                </button>
            </div>
        </div>



    );
};

export default Inventory;

