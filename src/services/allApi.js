// import commonApi from "./commonApi"

// const BASE_URL = "./baseUrl"

// // Add Product
// export const addProductApi = async (data) => {
//     return await commonApi(
//         "POST",
//         `${BASE_URL}/add-product`,
//         data
//     )
// }

// // Get Products
// export const getProductsApi = async () => {
//     return await commonApi(
//         "GET",
//         `${BASE_URL}/products`
//     )
// }

// // delete
// export const deleteProductApi = async (id) => {
//     return await commonApi(
//         "DELETE",
//         `${BASE_URL}/products/${id}`
//     );
// };

// // update
// export const updateProductApi = async (id, data) => {
//     return await commonApi(
//         "PUT",
//         `${BASE_URL}/products/${id}`,
//         data
//     );
// };


import commonApi from "./commonApi"
import BASE_URL from "./baseUrl"

// Add Product
export const addProductApi = async (data) => {
    return await commonApi(
        "POST",
        `${BASE_URL}/add-product`,
        data
    )
}

// Get Products
export const getProductsApi = async () => {
    return await commonApi(
        "GET",
        `${BASE_URL}/products`
    )
}

// Delete Product
export const deleteProductApi = async (id) => {
    return await commonApi(
        "DELETE",
        `${BASE_URL}/products/${id}`
    )
}

// Update Product
export const updateProductApi = async (id, data) => {
    return await commonApi(
        "PUT",
        `${BASE_URL}/products/${id}`,
        data
    )
}