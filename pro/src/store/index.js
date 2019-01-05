import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state={
    count:0
}
var getters={
    count:function(state){
        return state.count;
    }
}
var mutations={
    add:function(a){
        a.count++
    },
    jian:function(a){
        a.count--
    }
}
var actions={
    add:({commit})=>{
        commit('add')
    },
    jian:({commit})=>{
        commit('jian')
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})