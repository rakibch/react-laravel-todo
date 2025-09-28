import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  // withCredentials: true, // enable if using cookie-based auth with Sanctum
});

export default api;
