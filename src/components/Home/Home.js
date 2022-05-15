import React from 'react';
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react';
import { Container } from 'react-bootstrap';
import Banner from './Banner/Banner';
import './Home.css'
import Featured from './Featured/Featured';
import { Link } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import useProduct from '../hook/useProduct';
import Product from './Product/Product';

const Home = () => {
    const [products, setProducts] = useProduct();
    return (
        <div className=''>
            <Banner></Banner>
            <hr />
            <h1 className='text-center fw-bold fs-1'>Inventory Items</h1>
            <hr />

            <div className='container'>
                <div className="products-container row row-cols-1 row-cols-md-3 g-4 mb-3">
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>



            <div className='text-center'>
                <button className='link-btn mt-4'>
                    <div className=''><Link className='manage-text' to='/inventory'>Manage Inventories <ArrowCircleRightIcon className=''></ArrowCircleRightIcon></Link></div>
                </button>
            </div>
            <hr />
            <h1 className='text-center fw-bold fs-1'>Featured Products</h1>
            <hr />
            <Featured></Featured>
            <div className="background px-5 py-5 my-3">
                <h4 className="text-center mb-5 fw-bold">WHY ESSENTIALS!</h4>

                <div className="row mb-2">

                    <div className="col-3 card-ex">
                        <div>
                            <img src="https://i.ibb.co/996YSj7/trust.png" alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h5 className=''>100% trusted seller hub <br /> in worldwide.</h5>
                        </div>
                    </div>
                    <div className="col-3 card-ex">
                        <div>
                            <img src="https://i.ibb.co/vcbnyTb/experience.png" alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h5>10+ year of consisting with<br />experience</h5>
                        </div>
                    </div>
                    <div className="col-3 card-ex">
                        <div>
                            <img src="https://i.ibb.co/98Y7H7X/traveller.png" alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h5>24/7 home delivery service<br />in worldwide.</h5>
                        </div>
                    </div>
                    <div className="col-3 card-ex">
                        <div>
                            <img src="https://i.ibb.co/vcbnyTb/experience.png" alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h5>ISO certified from 2015<br />and leading brand of Electronics.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;