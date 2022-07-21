const state = {
  errorModal: null
}

const getters = {
  getErrorModal: (state) => state.errorModal
}
const mutations = {
  setErrorModal: (state, payload) => state.errorModal = payload
}

const actions = {
  addErrorModal({ state, commit }, payload) {
    commit('setErrorModal', payload)
  },
  unsetErrorModal({ state }) { 
    state.errorModal = undefined 
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
