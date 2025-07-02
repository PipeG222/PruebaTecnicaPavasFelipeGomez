import API from './api';

export const getProducts = () => API.get('/productos');
export const getProductById = (id) => API.get(`/productos/${id}`);
export const createProduct = (data) => API.post('/productos', data);
export const updateProduct = (id, data) => API.put(`/productos/${id}`, data);
export const deleteProduct = (id) => API.delete(`/productos/${id}`);
