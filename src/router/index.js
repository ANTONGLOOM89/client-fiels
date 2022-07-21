import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'Login', requiresAuth: true },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    meta: { layout: 'Main', requiresAuth: true },
    component: () => import('../views/Main.vue')
  },
  {
    path: '/',
    redirect: '/main'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //const authStatus = store.getters['isLoggedIn']
  const authStatus = false
  if (to.name !== 'login' && authStatus) next({ name: 'login' })
  else next()
})

export default router
