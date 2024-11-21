import { createRouter, createWebHistory } from 'vue-router'

import ProductDetailPage from '@/pages/ProductDetailPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import ShoppingCartPage from '@/pages/ShoppingCartPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import Home from '@/pages/HomePage.vue'
import AdminPage from '../pages/AdminPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cart',
      name: 'ShoppingCartPage',
      component: ShoppingCartPage,
    },
    {
      path: '/products',
      name: 'ProductPage',
      component: ProductPage,
    },
    {
      path: '/products/:productId',
      name: 'ProductDetailPage',
      component: ProductDetailPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      component: NotFoundPage,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage
    }

    

  ],
})

export default router
