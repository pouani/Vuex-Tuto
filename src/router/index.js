import { createRouter, createWebHistory } from 'vue-router'

import { authGuard } from "@/helpers/auth-guard";
// localStorage.setItem('token', 'david')

import Home from '@/components/views/Home.vue';
import Product from '@/components/views/Product.vue';
import ProductDetail from '@/components/views/ProductDetail.vue';
import Login from '@/components/Login.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
      path: '/productd/:id', 
      name: 'product-detail', 
      component: ProductDetail, 
      props: true,
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact",
  });
  
  router.beforeEach((to, from, next) => {
    console.log(to);
    if(to.matched[0].name == 'product'){
        authGuard()
    }
    next();
  })
  
  export default router