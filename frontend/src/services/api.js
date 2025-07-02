import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001', // el puerto de tu backend
});

// Interceptar peticiones y añadir el token si existe
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
