export const list = {
  state: {
    lists: [
    
    ]
  },
  getters: {
    getList(state) {
      return state.lists
    }
  },
  mutations: {
    insertItem(state, payload) {
      state.lists.unshift(payload)
    },
    deleteItem(state, id) {
      state.lists.splice(id, 1)
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
