import { createStore } from 'vuex'
import auth from './auth'
import modal from './modal'
import person from './person'
import files from './files'

export default createStore({
  modules: {
    auth,
    modal,
    person,
    files
  }
})
