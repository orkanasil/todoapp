export const list = {
  state: {
    list: []
  },
  getters: {
    getList(state) {
      return state.list
    }
  },
  mutations: {
    insertItem(state, payload) {
      state.list.unshift(payload)
    },
    deleteItem(state, id) {
      state.list.splice(id, 1)
    },
    updateItem(state, payload) {
      state.list.forEach((element) => {
        if (element.id === payload.id) {
          element.text = payload.text
        }
      })
    }
  },
  actions: {
    insertListItem({ commit }, payload) {
      commit('insertItem', payload)
    },
    deleteListItem({ commit }, id) {
      commit('deleteItem', id)
    },
    updateListItem({ commit }, payload) {
      commit('updateItem', payload)
    }
  }
}
