// src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5167/api', // 🔁 Replace with your base API
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

// Optional: Add interceptors for auth or logging
// apiClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('authToken');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// }, error => Promise.reject(error));

export default {
  get(url, params) {
    return apiClient.get(url, { params });
  },

  post(url, data) {
   
    return apiClient.post(url, data);
  },

  put(url, data) {
    return apiClient.put(url, data);
  },

  delete(url) {
    return apiClient.delete(url);
  },
};
