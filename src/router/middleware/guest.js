import store from '@/store'


export default function guest ({ next, store }){
  if (store.getters.isLoggedIn) {
    return next({
        name: 'main'
    })
}
  return next()
}