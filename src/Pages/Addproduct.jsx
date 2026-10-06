import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../services/baseurl";


function Addproduct() {

    const [collectdata,setcollectdata]=useState({
        title:"",
        price:"",
        category:"",
        description:"",
        image:""
    })

        const navigate = useNavigate();
    

    const handlesubmit=async()=>{
        const formData = new FormData()
        formData.append('title', collectdata.title)
        formData.append('price', collectdata.price)
        formData.append('category', collectdata.category)
        formData.append('description', collectdata.description)
       formData.append('uploadimg', collectdata.image)
        try {
              const response = await fetch(`${BASE_URL}/add-product`, {
            method: 'POST',
            body: formData
            })
            const result = await response.json()
            console.log(result)

                if (response.ok) {
            alert("Product added successfully!")
           navigate("/Listproduct");
           

  // Reset state
            setcollectdata({
                title: "",
                price: "",
                category: "",
                description: "",
                image: null
            })

            // Reset file input
            document.querySelector('input[type="file"]').value = ""             
        } else {
            alert(result.message || "Failed to add product")
        }
        } catch (error) {
            console.error('Error:', error)
        }
    }
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-7">

          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h2 className="fw-bold text-center mb-4">
                Add Product
              </h2>

              <div>

                {/* Product Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Product Name
                  </label>
                  <input  type="text"  className="form-control" onChange={(e)=>{setcollectdata({...collectdata,title:e.target.value})}}  placeholder="Enter product name"/>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Price
                  </label>
                  <input type="number" className="form-control" onChange={(e)=>{setcollectdata({...collectdata,price:e.target.value})}} placeholder="Enter product price"/>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Category
                  </label>

                  <select className="form-select" onChange={(e)=>{setcollectdata({...collectdata,category:e.target.value})}}>
                    <option>Select Category</option>
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Shoes</option>
                    <option>Books</option>
                    <option>Accessories</option>
                  </select>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Description
                  </label>

                  <textarea className="form-control" rows="4"  placeholder="Enter product description" onChange={(e)=>{setcollectdata({...collectdata,description:e.target.value})}} ></textarea>
                </div>

                {/* Image */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Product Image
                  </label>

                  <input  type="file" className="form-control" onChange={(e)=>{setcollectdata({...collectdata,image:e.target.files[0]})}} accept="image/*" />
                </div>

                {/* Button */}
                <button onClick={handlesubmit}
                  type="button"
                  className="btn btn-primary w-100"
                >
                  Add Product →
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Addproduct;