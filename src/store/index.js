import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);


const state = {
     user: {
      name: ''
    },
    /*
        notes:存储note项
        activeNote:当前正在编辑的note项
    */
    notes:[],
    activeNote:{}
}





const getters = {
    /*
        Getters 接受 state 作为其第一个参数
        state => state.notes为箭头函数等价于：
        function (state){
            return state.notes
        }
    */
  notes: state => state.notes,
  activeNote: state => state.activeNote
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
