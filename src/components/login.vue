<!-- src/views/Login.vue -->
<template>
  <div class="d-flex min-vh-100">
    <!-- Left Panel with Gradient -->
    <div class="d-none d-md-flex flex-column justify-content-center align-items-center text-white bg-gradient p-4" style="width: 40%; background: linear-gradient(135deg, #6a11cb, #2575fc);">
      <h1 class="display-6 fw-bold">Welcome</h1>
      <p class="text-center">Please log in to continue</p>
    </div>

    <!-- Right Panel with Login Form -->
    <div class="d-flex flex-grow-1 justify-content-center align-items-center">
      <div class="card p-4 shadow" style="min-width: 300px; max-width: 400px; width: 100%;">
        <h2 class="text-center mb-4 text-primary">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="form-control"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import authService from '../Services/authService';
import { useRouter } from 'vue-router';

const router = useRouter();

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
    debugger;
    const self = this;
      const response =   authService.login({
        userName: username.value,
        password: password.value
    }).then(resp => {
      debugger;
         console.log(resp.data); // Success
         const token = resp.data.accessToken;
         localStorage.setItem('authToken', token);
       // Redirect to dashboard or home
       self.$router.push('/');
        // router.push('/');
     }).catch(error => {
            console.error('Login failed:', error);
            // Assuming the token is in response.data.token
   
    });

   
      
    
  }
}
}

</script>

<!-- <style scoped>
.login {
  max-width: 300px;
  margin: 100px auto;
}
</style> -->
