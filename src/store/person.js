import { apiOnePerson } from '@/services/person.services'

const state = {
  person: {}
}

const getters = {
  getPerson: (state) => state.person
}

const mutations = {
  setOnePerson: (state, payload) => { state.person = payload }
}

const actions = {
  async fetchOnePerson({ commit }, payload) {
    try {
      const res = await apiOnePerson(payload)
      await localStorage.setItem('personId', payload)
      commit('setOnePerson', res)
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
  