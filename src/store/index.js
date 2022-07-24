import { createStore } from 'vuex'
import auth from './auth'
import modal from './modal'
import person from './person'

export default createStore({
  modules: {
    auth,
    modal,
    person
  }
})
