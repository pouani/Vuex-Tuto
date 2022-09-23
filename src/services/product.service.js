/*****************************/
/*** Import des mdules nécessires ***/

import Axios from './caller.service'

let createProduct = (product) => {
    return Axios.post('/produits', product)
}

const getAllprod = () => {
    return Axios.get('/produits')
}

const getprod = (uid) => {
    return Axios.get('/produits/'+uid) 
}

const deleteProduct = (uid) => {
    return Axios.delete('/produits/'+uid)
}

export const productService = {
    createProduct,
    getAllprod,
    getprod,
    deleteProduct
}