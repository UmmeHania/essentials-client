import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import google from '../../Assets/google.png'
import auth from '../../firebase.int';
import Loading from '../../Home/Loading/Loading';
import './GoogleLogIn.css'

const GoogleLogIn = () => {
    const { id } = useParams();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }


    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }
    // if (user) {
    //     navigate(`/inventory/${id}`)
    // }
    // <Loading></Loading>
    // if (user) {
    //     navigate('/inventory/:id')
    // }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            {loading}
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='custom w-50 bg-white border-1'> <img style={{ width: '30px' }} src={google} alt="" /> <span className='fw-bold'>Google Sign In</span></button>
            </div>
        </div>
    );
};

export default GoogleLogIn;