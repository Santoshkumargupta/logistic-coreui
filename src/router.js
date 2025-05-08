// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Product from './components/Product.vue'
import Supplier from './components/Supplier.vue'

const routes = [
   { path: '/', name: 'Home', component: Home },
  { path: '/Supplier', name: 'Supplier', component: Supplier },
  { path: '/Product', name: 'Product', component: Product },
]

const router = createRouter({
  history: createWebHistory(), // or createWebHashHistory() if needed
  routes,
})

export default router;
