import { createStore } from 'vuex'
import auth from './auth'
import modal from './modal'

export default createStore({
  modules: {
    auth,
    modal
  }
})
