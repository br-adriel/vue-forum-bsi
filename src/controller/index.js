import { createStore } from 'vuex';

export default createStore({
  state: {
    isAppStarting: true,
  },
  getters: {
    getIsAppStarting(state) {
      return state.isAppStarting;
    },
  },
  mutations: {
    setIsAppStarting(state, value) {
      state.isAppStarting = value;
    },
  },
  actions: {
    appAlreadyStarted({ commit }) {
      commit('setIsAppStarting', true);
    },
  },
});
