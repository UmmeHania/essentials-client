// import React from 'react';

import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.int";
// import { Navigate } from "react-router-dom";
// import Loading from "../Home/Loading/Loading";

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const { email } = user;


    const onSubmit = data => {
        const url = `https://damp-badlands-61750.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("Congrats! Product added");
                }
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center fw-bold'>Add Product here!</h2>
            <form className='d-flex flex-column login-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="text" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input className='mb-2' placeholder='Quantity' type="text" {...register("quantity")} />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder=" "
                    required
                    value={email}
                    {...register("email")}
                />
                <input className='mb-2 link-btn w-50 mx-auto mt-2' type="submit" value="Add Product" />
                <input className='mb-2 link-btn w-50 mx-auto' type="reset" ></input>
            </form>
        </div>
    );
};

export default AddItem;
