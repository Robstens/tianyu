import * as types from './mutation-types'

const actions = {
     
    addNote({commit}){
        commit('ADD_NOTE')
    },
    editNote({commit},text){
        commit("EDIT_NOTE",text)
    },
    updateActiveNote({commit},note){
        commit('SET_ACTIVE_NOTE',note)
    },
    toggleFavorite({commit}){
        commit('TOGGLE_FAVORITE')
    },
    deleteNote({commit}){
        commit('DELETE_NOTE')
    },
  userLogin({
    commit
  }, data) {
    commit(types.LOGIN, data);
  },
  delUserSession({
    commit
  }, data) {
    commit(types.DELSESSION, data);
  },
  userLoginOut({
    commit
  }) {
    commit(types.LOGINOUT);
  }
}

export default actions