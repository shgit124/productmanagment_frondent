
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">

        <a className="navbar-brand fw-bold" href="/">
    Mystore
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse gap-3"
          id="navbarContent"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              {/* <a className="nav-link active" href="/">
                Products
              </a> */}
              <Link to={'/listproduct'} className="nav-link">products</Link>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link" href="/add-product">
                Add Product
              </a> */}
              <Link to={'/addproduct'} className="nav-link"  >Addproducts</Link>
            </li>

              <li className="nav-item">
              {/* <a className="nav-link" href="/add-product">
                Add Product
              </a> */}
              <Link to={'/edit-product/:id'} className="nav-link"  >Editproduct</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                🛒 Cart
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

