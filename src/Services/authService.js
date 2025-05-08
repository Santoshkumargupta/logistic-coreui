// src/services/authService.js
import api from './apiService';

export default {
   login(model) {

    return api.post('/Authenticate/login', model);
  },
};
