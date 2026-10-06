import React, { useEffect, useState } from 'react'
import { getProductsApi } from "../services/allApi";
import { deleteProductApi } from '../services/allApi';
import { useNavigate } from "react-router-dom";
import BASE_URL from "../services/baseurl";
function Listproduct() {

      const [products, setProducts] = useState([]);

      const navigate = useNavigate();

      const getProducts = async () => {

        try {

            const response = await getProductsApi();

            console.log(response.data);

            setProducts(response.data.products);

        } catch (error) {

            console.log(error);

        }
    };

    const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await deleteProductApi(id);

        alert(response.data.message);

        getProducts();

    } catch (error) {

        console.log(error);
        alert("Failed to delete product");

    }
};

// edit
const handleEdit = (item) => {
    navigate(`/edit-product/${item._id}`, {
        state: item
    });
};

      useEffect(() => {
        getProducts();
    }, []);

  return (
   <>
  
   <div className="container py-5">

            <h2 className="text-center mb-4">
                Product List
            </h2>

            <div className="row">

                {products.map((item) => (

                    <div
                        className="col-md-3 mb-4"
                        key={item._id}
                    >

                        <div className="card h-100 shadow-sm">

                         <img
    src={`${BASE_URL}/bookImages/${item.uploadimg}`}
    className="card-img-top"
    alt={item.title}
    style={{
        height: "250px",
        objectFit: "cover"
    }}
/>

                            <div className="card-body">

                                <h5 className="card-title">
                                    {item.title}
                                </h5>

                                <h6 className="text-primary">
                                    ₹{item.price}
                                </h6>

                                <p className="text-muted">
                                    {item.category}
                                </p>

                                <p>
                                    {item.description}
                                </p>

                                <button className="btn btn-primary w-100">
                                    Add to Cart
                                </button>

                                <div className="d-flex gap-2 mt-3">

    <button
        className="btn btn-warning w-50"
        onClick={() => handleEdit(item)}
    >
        Edit
    </button>

    <button
        className="btn btn-danger w-50"
        onClick={() => handleDelete(item._id)}
    >
        Delete
    </button>

</div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
   </>
  )
}

export default Listproduct