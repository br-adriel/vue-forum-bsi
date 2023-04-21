import { db } from '@/firebase.config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { createStore } from 'vuex';

export default createStore({
  state: {
    isAppStarting: true,
    questions: [],
  },
  getters: {
    getIsAppStarting(state) {
      return state.isAppStarting;
    },
    getQuestions(state) {
      return state.questions;
    },
  },
  mutations: {
    setIsAppStarting(state, value) {
      state.isAppStarting = value;
    },
    setQuestions(state, value) {
      state.questions = value;
    },
    addQuestion(state, question) {
      state.questions.unshift(question);
      if (state.questions.length > 10) state.questions.pop();
    },
  },
  actions: {
    appStarted({ commit }) {
      setTimeout(() => {
        commit('setIsAppStarting', false);
      }, 2000);
    },
    async createQuestion({ commit }, question) {
      const savedQuestion = await addDoc(collection(db, 'questions'), {
        ...question,
        createdAt: serverTimestamp(),
      });
      commit('addQuestion', { id: savedQuestion.id, ...question });
    },
  },
});
