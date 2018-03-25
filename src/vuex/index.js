



import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as getters from './getters';
import mutations from './mutations.js';
import * as actions from './actions';


Vue.use(Vuex);
export default new Vuex.Store({
	getters,
	state,
	actions,
	mutations,
});
