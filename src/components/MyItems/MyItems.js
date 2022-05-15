import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.int';
import axiosPrivate from '../hook/axiosPrivate';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setItems(data);
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        };
        getItems();
    }, [reload, user]);


    console.log(items);


    return (
        <div className="login-form row row-cols-1 row-cols-md-3">
            {
                items.map(item =>
                    <CardGroup className="">
                        <Card className='height login-form'>
                            <div className='text-center'>
                                <Card.Img className='w-50' variant="top" src={item.img} />
                            </div>
                            <Card.Body className='text'>
                                <Card.Title className='text-center fw-bold'>{item.name}</Card.Title>
                                <Card.Text >
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    Price: {item.price}
                                </Card.Text>
                                <Card.Text>
                                    Supplier: {item.supplier}
                                </Card.Text>
                                <Card.Text>
                                    Quantity: {item.quantity}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </CardGroup>
                )
            }


        </div >
    );
};

export default MyItems;