
import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertId) {
                    alert('Product added Successfully')
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
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddItem;
//return (
//         <div>
// //             <h1>add item</h1>

// //         </div>
//     );
// };

// export default AddItem;
// import React, { useRef } from 'react';
// import { Container } from 'react-bootstrap';
// import './AddItem.css'

// const AddItem = () => {
//     const nameRef = useRef();
//     const priceRef = useRef();
//     const quantityRef = useRef();
//     const supplierRef = useRef();
//     const descRef = useRef();
//     const imgRef = useRef();
//     const handleSubmit = (e) => {
//         const name = nameRef.current.value;
//         const price = priceRef.current.value;
//         const quantity = quantityRef.current.value;
//         const supplier = supplierRef.current.value;
//         const description
//             = descRef.current.value;
//         const img = imgRef.current.value;
//         const newProduct = {
//             name, price, quantity, supplier, description
//             , img
//         }
//         fetch('https://', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newProduct)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     alert('Product added Successfully')
//                     e.target.reset();
//                 }
//             })
//         e.preventDefault()
//     }
//     return (
//         <div>
//             <Container className="py-5">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h3 className="text-center fw-bold">Add a Product here!</h3>
//                     </div>
//                 </div>
//                 <div className="row ">
//                     <form className="col-md-5 mx-auto" onSubmit={handleSubmit}>
//                         <input type="text" ref={nameRef} placeholder="Name of the Product" />
//                         <input type="text" ref={priceRef} placeholder="Price" />
//                         <input type="text" ref={quantityRef} placeholder="quantity" />
//                         <input type="text" ref={supplierRef} placeholder="supplier" />
//                         <textarea placeholder="Add description" ref={descRef} cols="30" rows="10"></textarea>
//                         <input type="text" ref={imgRef} placeholder="place an image link of your product" />
//                         <input className='submit' type="submit" value="Submit" />
//                     </form>
//                 </div>
//             </Container>
//    </div >
//    );
//  };

// export default AddItem;