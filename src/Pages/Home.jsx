
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container py-4">
          <div className="row align-items-center">

            <div className="col-md-7">
              <h1 className="display-5 fw-bold">
                Manage Your Products Easily
              </h1>

              <p className="lead text-muted mt-3">
                Add, update, view and manage all your products
                from one simple dashboard.
              </p>

              <div className="mt-4 d-none d-md-block ">
                {/* <a
                  href="/products"
                  className="btn btn-primary btn-lg me-2"
                >
                  View Products
                </a> */}
                <Link to={'/Listproduct'} className="btn btn-primary btn-lg me-2">  View Products</Link>

                {/* <a
                  href="/add-product"
                  className="btn btn-outline-primary btn-lg"
                >
                  Add Product
                </a> */}

             <Link to={'/addproduct'} className="btn btn-primary btn-lg me-2">  add Products</Link>

              </div>
            </div>

            <div className="col-md-5 text-center mt-4 mt-md-0">
              <div className="bg-white rounded-4 shadow p-5">

                <div style={{ fontSize: "80px" }}>
                  🛍️
                </div>

                <h4 className="mt-3">
               My Store
                </h4>

                <p className="text-muted mb-0">
                  Simple & efficient product management
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Features */}
      <div className="container py-5">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Everything You Need
          </h2>

          <p className="text-muted">
            Manage your products with simple and powerful features.
          </p>
        </div>


        <div className="row g-4">

          {/* Add Product */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">

              <div style={{ fontSize: "45px" }}>
                ➕
              </div>

              <h5 className="fw-bold mt-3">
                Add Products
              </h5>

              <p className="text-muted">
                Easily add new products with name, price,
                category, description and image.
              </p>

            </div>
          </div>


          {/* Manage Products */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">

              <div style={{ fontSize: "45px" }}>
                ✏️
              </div>

              <h5 className="fw-bold mt-3">
                Manage Products
              </h5>

              <p className="text-muted">
                Update product information whenever
                you need to make changes.
              </p>

            </div>
          </div>


          {/* Cart */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 text-center">

              <div style={{ fontSize: "45px" }}>
                🛒
              </div>

              <h5 className="fw-bold mt-3">
                Shopping Cart
              </h5>

              <p className="text-muted">
                Add products to your cart and manage
                your selected items easily.
              </p>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom CTA */}
      <div className="container pb-5">

        <div className="bg-primary text-white rounded-4 p-5 text-center">

          <h2 className="fw-bold">
         Ready to Explore Your Products?
          </h2>

          <p className="mb-4">
           manage all your products in one place
          </p>

          <Link  to={'/Listproduct'}
          
            className="btn btn-light btn-lg"
          >
            ➜ View products
          </Link>

        </div>

      </div>
    </>
  );
}

export default Home;

