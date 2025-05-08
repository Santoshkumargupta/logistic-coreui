<!-- src/views/Home.vue -->
<template>
    <div class="home-dashboard p-6">
      <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-4 bg-white shadow rounded-lg">
          <h2 class="text-lg font-semibold">Total Users</h2>
          <p class="text-3xl text-blue-600">120</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h2 class="text-lg font-semibold">Total Orders</h2>
          <p class="text-3xl text-green-600">345</p>
        </div>
        <div class="p-4 bg-white shadow rounded-lg">
          <h2 class="text-lg font-semibold">Revenue</h2>
          <p class="text-3xl text-yellow-600">$12,340</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        // You can fetch real data here later
      }
    }
  }
  </script>
  
  <style scoped>
  /* Additional styles can go here */
  </style>
  