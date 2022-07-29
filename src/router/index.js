import { createWebHistory, createRouter } from "vue-router";
import store from '@/store'
import guest from './middleware/guest'
import auth from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'

console.log(store.getters.isLoggedIn)

const router = new createRouter({
  history: createWebHistory(),
  routes: [
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: { layout: 'Login', middleware: [guest]}
      },
      {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main.vue'),
        meta: { layout: 'Main', middleware: [auth]}
      }
    ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })

})

export default router
