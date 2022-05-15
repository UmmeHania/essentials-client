import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [reload, setReload] = useState(false);

    const { _id, name, img, price, description, quantity, supplier } = product;

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id, reload]);

    const handleRestockItems = (event) => {
        event.preventDefault();
        const inputValue = parseInt(event.target.quantity.value);
        if (inputValue >= 1) {
            let quantityAdd = parseInt(quantity) + inputValue;

            // send data to server
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity: quantityAdd }),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert("Product updated successfully");
                    event.target.reset();
                    setReload(!reload);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    };

    const deliveryHandler = (quantity) => {
        if (quantity) {
            if (quantity > -1) {
                let quantityMinus = quantity - 1;

                const url = `http://localhost:5000/inventory/${id}`;
                fetch(url, {
                    method: "PUT",
                    body: JSON.stringify({
                        quantity: quantityMinus,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                    .then((res) => res.json())
                    .then((json) => {
                        setReload(!reload);
                    });
            }
        }
    };

    return (
        <div>
            <div className="container w-50 mx-auto login-form mt-3 mb-3">
                <h2 className="text-center fw-bold">Product Details</h2>
                <hr />
                <Table striped bordered hover responsive>
                    <div className="mx-auto text-center mx-5">
                        <img className="w-50" src={img} alt="" />
                    </div>

                    <tbody>
                        <tr>
                            <td colSpan={1}>Product ID</td>
                            <td colSpan={3}>{id}</td>
                        </tr>
                        <tr>
                            <td colSpan={1}>Product Name</td>
                            <td colSpan={3}>{name}</td>
                        </tr>

                        <tr>
                            <td colSpan={1}>Description</td>
                            <td colSpan={3}>{description}</td>
                        </tr>

                        <tr>
                            <td colSpan={1}>Supplier</td>
                            <td colSpan={3}>{supplier}</td>
                        </tr>
                        <tr>
                            <td colSpan={1}>Quantity</td>
                            <td colSpan={3}>{quantity < 1 ? "Sold ❌" : quantity}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="d-flex justify-content-center">
                <button
                    onClick={() => deliveryHandler(quantity)}
                    className="link-btn mx-3"
                >
                    Delivered
                </button>
                <form onSubmit={handleRestockItems}>
                    <input className="mx-2" type="number" name="quantity" />
                    <button type="submit" className="link-btn">
                        Restock
                    </button>
                </form>
            </div>
            <div className="text-center">
                <button className="link-btn mt-4">
                    <h5 className="">
                        <Link className="manage-text" to="/inventory">
                            Manage Inventories
                            <ArrowCircleRightIcon className="fs-3"></ArrowCircleRightIcon>
                        </Link>
                    </h5>
                </button>
            </div>
        </div>
    );
};

export default Inventory;
