const state = {
  errorModal: null,
  actionModal: null,
  fileModal: undefined
}

const getters = {
  getErrorModal: (state) => state.errorModal,
  getActionModal: (state) => state.actionModal,
  getFileModal: (state) => state.fileModal
}
const mutations = {
  setErrorModal: (state, payload) => state.errorModal = payload,
  setActionModal: (state, payload) => state.actionModal = payload,
  setFileModal: (state, payload) => { state.fileModal = payload },
  unsetFileModal: (state) => { state.fileModal = undefined }
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
  },
  addFileModal({ commit }, payload) {
    commit('setFileModal', payload)
  },
  unsetFileModal({ commit } ) {
    commit('unsetFileModal')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
