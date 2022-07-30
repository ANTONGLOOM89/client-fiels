const state = {
  errorModal: null,
  actionModal: null
}

const getters = {
  getErrorModal: (state) => state.errorModal,
  getActionModal: (state) => state.actionModal
}
const mutations = {
  setErrorModal: (state, payload) => state.errorModal = payload,
  setActionModal: (state, payload) => state.actionModal = payload
}

const actions = {
  addErrorModal({ state, commit }, payload) {
    commit('setErrorModal', payload)
  },
  unsetErrorModal({ state }) { 
    state.errorModal = undefined 
  },
  addActionModal({ state, commit }, payload) {
    commit('setActionModal', payload)
  },
  unsetActionModal({ state }) { 
    state.actionModal = undefined
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
