import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Home/Loading/Loading';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please provide an email address')
        }

    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center fw-bold'>Please login!</h1>
            <Form onSubmit={handleSubmit} className='login-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <div> <Button className='d-block mx-auto w-50' variant="primary" type="submit">
                    Submit
                </Button></div>
                {errorElement}
                <p className='mt-3'>New to DENTISTRY? <span className='text-primary'><Link className='form-link' onClick={navigateRegister} to='/register'>Please Register here!</Link></span></p>
                <p className='mt-3'>Forget Password? <span className='text-primary'><button className='btn btn-link text-decoration-none' onClick={resetPassword} >Reset password </button></span></p>
                <GoogleLogin></GoogleLogin>
                <ToastContainer></ToastContainer>
            </Form>

        </div>
    );
};

export default Login;