import { API } from "../../backend";

//Category Calls
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
};

//Get All Categories
export const getCategoies = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
};

//Products Calls
export const createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
};

//Get All Products
export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
};

//Get A Product
export const getProduct = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
};

//Update A Product
export const updateProduct = (productId, userId, token, product) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
};

//Delete A Product
export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
};
