import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import nProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/checkout-success',
      name: 'checkout-success',
      component: () => import('../views/CheckoutSuccessView.vue')
    }
  ],
})

nProgress.configure({
  showSpinner: false,
  speed: 500,
  minimum: 0.3,
});

router.beforeEach((to, from, next) => {
  if (to.path === from.path && to.hash !== from.hash) {
    return next();
  }

  nProgress.start();
  next();
});

router.afterEach(() => {
  nProgress.done();
});


export default router
