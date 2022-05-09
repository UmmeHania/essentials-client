import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../components/Assets/error.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <section className='container'>
            <div>
                <h2 className='fw-bold text-center my-3'>Sorry!Your desire page is not Found.

                    <Link className='go' to='/'>Go to Home</Link>
                </h2>
            </div>
            <div className=''>
                <div className='text-center'>  <img className='w-50' src={error} alt="" /></div>


            </div>
        </section>
    )
}

export default NotFound;