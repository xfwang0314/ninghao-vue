import { createStore, createLogger } from 'vuex';
import userStore, { UserState } from './user/user.store';
import { logger } from './app.plugin';
export interface RootState {
  name: string;
  loadding: boolean;
  user?: UserState;
}
/**
 * 创建Store
 */
const store = createStore({
  state: {
    name: '',
    loadding: false,
  },
  getters: {
    getName(state) {
      return `☺ ${state.name}`;
    },
  },
  mutations: {
    setName(state, data) {
      state.name = data;
    },
    setLoadding(state, data) {
      state.loadding = data;
    },
  },
  actions: {
    getNameAsync({ commit, rootState }) {
      console.log(rootState);
      commit('setLoadding', true);
      setTimeout(() => {
        const name = '王晓飞Actions';
        commit('setName', name);
        setTimeout(() => {
          commit('setLoadding', false);
        }, 3000);
      }, 1000);
    },
  },
  modules: {
    userStore,
  },
  plugins: [createLogger(), logger],
});

export default store;
