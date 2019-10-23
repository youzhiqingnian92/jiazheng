import vuex from "vuex";
import Vue from "vue";

var state = {
  isAdd: false,
  ishouseAdd: false,
  iswaterAdd:true
};
var mutations = {
    changeAdd(state){
        state.isAdd = true
    },
    changeAdd2(state){
        state.isAdd = false
    },
    changeHouse(state){
        state.ishouseAdd = true
    },
    changeHouse2(state){
        state.ishouseAdd = false
    },
    waterAdd(state){
        state.iswaterAdd = false
    },
    waterAdd2(state){
        state.iswaterAdd = true
    }
};
var actions = {
    changeAA(context){
        context.commit("changeAdd")
    },
    changeAA2(context){
        context.commit("changeAdd2")
    },
    changeHH(context){
        context.commit("changeHouse")
    },
    changeHH2(context){
        context.commit("changeHouse2")
    },
    waterAA(context){
        context.commit("waterAdd")
    },
    waterAA2(context){
        context.commit("waterAdd2")
    },
};

Vue.use(vuex);
var store = new vuex.Store({
  state,
  actions,
  mutations
});

export default store;
