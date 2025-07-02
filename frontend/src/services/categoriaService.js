import API from './api';

export const getCategories = () => API.get('/categorias');
export const getCategoryById = (id) => API.get(`/categorias/${id}`);
export const createCategory = (data) => API.post('/categorias', data);
export const updateCategory = (id, data) => API.put(`/categorias/${id}`, data);
export const deleteCategory = (id) => API.delete(`/categorias/${id}`);
