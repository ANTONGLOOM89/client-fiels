import { apiAddFolder, apiAllFolders } from '@/services/file.services'

const state = {
  folders: []
}

const getters = {
  getFolders: (state) => state.folders
}

const mutations = {
  setFolders: (state, payload) => { state.folders = payload },
  setOneFolder: (state, payload) => { state.folders.push(payload) }
}

const actions = {
  async addFolder({ commit }, payload) {
    const folder = await apiAddFolder(payload)
    commit('setOneFolder', folder)
  },
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