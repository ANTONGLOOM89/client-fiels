import { apiRegistration, apiLogin } from '@/services/auth.services'
import axios from 'axios'

const state = {
  token: localStorage.getItem('token') || ''
}

const getters = {
  isLoggedIn: (state) => !!state.token
}

const mutations = {
  setToken: (state, payload) => state.token = payload,
  setLogout: (state) => { state.token = '' }
}

const actions = {
  async addPerson({ dispatch }, payload) {
    try {
      let res = await apiRegistration(payload)
      if (res.success) {
        dispatch('addToken', res.token)
        dispatch('fetchOnePerson', res.person.id)
      }
      else dispatch('addErrorModal', res)
    } catch (e) {
      new Error(e)
    }
  },
  async loginPerson({ dispatch }, payload) {
    try {
      let res = await apiLogin(payload)
      console.log('res', res)
      if (res.success) {
        dispatch('addToken', res.token)
        dispatch('fetchOnePerson', res.person.id)
      }
      else dispatch('setErrorModal', res)
    } catch (e) {
      new Error(e)
    }
  },
  async logoutPerson ({ commit }) {
    try {
      await localStorage.removeItem('token')
      commit('setLogout')
      delete axios.defaults.headers.common['Authorization']
    } catch(e) {
      new Error(e)
    }
  },
  async addToken({ commit }, payload) {
    try {
      axios.defaults.headers.common['Authorization'] = payload
      localStorage.setItem('token', payload)
      commit('setToken', payload)
    } catch(e) {
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
