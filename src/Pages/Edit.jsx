

import React, { useState } from "react";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

import { updateProductApi } from "../services/allApi";

function Edit() {

    const location = useLocation();
    const navigate = useNavigate();

    const { id } = useParams();

    const product = location.state;

    console.log("Edit Product ID:", id);
    console.log("Product:", product);

    const [collectdata, setCollectdata] = useState({
        title: product?.title || "",
        price: product?.price || "",
        category: product?.category || "",
        description: product?.description || "",
        image: null
    });

    const handleChange = (e) => {

        setCollectdata({
            ...collectdata,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e) => {

        e.preventDefault();

        if (!id) {
            alert("Product ID not found");
            return;
        }

        const formData = new FormData();

        formData.append("title", collectdata.title);
        formData.append("price", collectdata.price);
        formData.append("category", collectdata.category);
        formData.append("description", collectdata.description);

        if (collectdata.image) {
            formData.append(
                "uploadimg",
                collectdata.image
            );
        }

        try {

            console.log("Updating ID:", id);

            const response = await updateProductApi(
                id,
                formData
            );

            console.log(response.data);

            alert("Product updated successfully");

            navigate("/Listproduct");

        } catch (error) {

            console.log(error);

            console.log(
                error.response?.data
            );

            alert(
                error.response?.data?.message ||
                "Update failed"
            );
        }
    };

    return (
        <div className="container mt-5">

            <div
                className="card p-4 mx-auto"
                style={{ maxWidth: "600px" }}
            >

                <h2 className="text-center mb-4">
                    Edit Product
                </h2>

                <form onSubmit={handleUpdate}>

                    <input
                        type="text"
                        name="title"
                        className="form-control mb-3"
                        placeholder="Product Title"
                        value={collectdata.title}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="price"
                        className="form-control mb-3"
                        placeholder="Price"
                        value={collectdata.price}
                        onChange={handleChange}
                    />

                    <select
                        name="category"
                        className="form-select mb-3"
                        value={collectdata.category}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select Category
                        </option>

                        <option value="Electronics">
                            Electronics
                        </option>

                        <option value="Clothing">
                            Clothing
                        </option>

                        <option value="Books">
                            Books
                        </option>

                        <option value="Shoes">
                            Shoes
                        </option>

                        <option value="Accessories">
                            Accessories
                        </option>

                    </select>

                    <textarea
                        name="description"
                        className="form-control mb-3"
                        placeholder="Description"
                        value={collectdata.description}
                        onChange={handleChange}
                    />

                    <label className="form-label">
                        Change Image
                    </label>

                    <input
                        type="file"
                        className="form-control mb-3"
                        accept="image/*"
                        onChange={(e) => {

                            setCollectdata({
                                ...collectdata,
                                image: e.target.files[0]
                            });

                        }}
                    />

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Update Product
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Edit;