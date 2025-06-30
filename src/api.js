// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // <- isso é essencial
});

export default api;

//export default axios.create({ baseURL: 'http://localhost:5000/api' });
