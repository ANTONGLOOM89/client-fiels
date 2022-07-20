import { apiRegistration, apiLogin } from '@/services/auth.services'

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
  async addPerson({ commit, dispatch }, payload) {
    console.log(payload)
    try {
      let res = await apiRegistration(payload)
      if (res.success) {
        console.log(res)
        //dispatch('unsetModal')
        //dispatch('addToken', res.token)
      } 
      //else dispatch('setErrorModal', res)
    } catch (e) {
      new Error(e)
    }
  },
  async loginPerson({ dispatch }, payload) {
    console.log(payload)
    try {
      let res = await apiLogin(payload)
      console.log('res', res)
      if (res.success) {
        console.log(res)
        //dispatch('unsetModal')
        //dispatch('addToken', res.token)
      }
      //else dispatch('setErrorModal', res)
    } catch (e) {
      new Error(e)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
