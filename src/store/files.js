import { apiAllFolders } from '@/services/file.services'

const state = {
  folders: []
}

const getters = {
  getFolders: (state) => state.folders
}

const mutations = {
  setFolders: (state, payload) => { state.folders = payload }
}

const actions = {
  async fetchFolders({ commit }, payload) {
    try {
      const res = await apiAllFolders(payload)
      commit('setFolders', res)
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