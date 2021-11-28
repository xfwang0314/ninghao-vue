import { RootState } from '../app.store';
import { Module } from 'vuex';
export interface UserState {
  currentUser: string;
}
const store: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    currentUser: '',
  },
  mutations: {
    setCurrentName(state, data) {
      state.currentUser = data;
    },
  },
  getters: {
    getterCurrentUser(state) {
      return state.currentUser;
    },
  },
  actions: {
    getCurrentUser({ commit }) {
      const user = '晓飞王';
      commit('setCurrentName', user);
    },
  },
};
export default store;
