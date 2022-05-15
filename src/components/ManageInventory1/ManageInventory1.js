
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useProduct from '../hook/useProduct';
import { Card, CardGroup, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ManageInventory1 = () => {
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
    const navigate = useNavigate();


    const navigateToProductDetail = _id => {
        navigate(`/inventory/${_id}`);

    }

    return (
        <div className='container'>
            <div className="products-container row row-cols-1 row-cols-md-3 g-4 mb-3" >
                {
                    products.map(product =>
                        <div key={product._id}>
                            <CardGroup className="">
                                <Card className='height login-form'>
                                    <div className='text-center'>
                                        <Card.Img className='w-50' variant="top" src={product?.img} />
                                    </div>
                                    <Card.Body className='text'>
                                        <Card.Title className='text-center fw-bold'>{product?.name}</Card.Title>
                                        <Card.Text >
                                            {product?.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Price: {product?.price}
                                        </Card.Text>
                                        <Card.Text>
                                            Supplier: {product?.supplier}
                                        </Card.Text>
                                        <Card.Text>
                                            Quantity: {product?.quantity}
                                        </Card.Text>
                                    </Card.Body>
                                    <button onClick={() => navigateToProductDetail(product._id)} className='link-btn'>Update</button>

                                    <button onClick={() => handleDelete(product._id)} className='link-btn'>DELETE <DeleteForeverIcon></DeleteForeverIcon>  </button>

                                </Card>
                            </CardGroup>
                        </div>
                    )
                }
            </div>

            <div className='text-center'>
                <button className='link-btn mt-4'>
                    <div className=''><Link className='manage-text' to='/additem'>Add Product </Link></div>
                </button>
            </div>

        </div>
        // <div className='container'>
        //     <div className="products-container row row-cols-1 row-cols-md-3 g-4 mb-3">
        //     <div>    
        // </div>
    );
};

export default ManageInventory1;