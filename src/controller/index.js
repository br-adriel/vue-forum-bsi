import { db } from '@/firebase.config';
import { signInGoogle, signOutGoogle } from '@/utils/auth/googleAuth';
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { createStore } from 'vuex';

export default createStore({
  state: {
    isAppStarting: true,
    questions: [],
    recentQuestions: [],
    user: null,
  },
  getters: {
    getIsAppStarting(state) {
      return state.isAppStarting;
    },
    getQuestions(state) {
      return state.questions;
    },
    getRecentQuestions(state) {
      return state.recentQuestions;
    },
    getUser(state) {
      return state.user;
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
    },
    setRecentQuestions(state, questions) {
      state.recentQuestions = questions;
    },
    addRecentQuestion(state, question) {
      state.recentQuestions.unshift(question);
      if (state.recentQuestions.length > 10) {
        state.recentQuestions.pop();
      }
    },
    setUser(state, newUser) {
      state.user = newUser;
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
        interactions: 0,
        createdAt: serverTimestamp(),
      });
      commit('addQuestion', { id: savedQuestion.id, ...question });
      commit('addRecentQuestion', { id: savedQuestion.id, ...question });
    },
    async loadQuestions({ commit }) {
      const q = query(
        collection(db, 'questions'),
        orderBy('interactions', 'desc')
      );
      const fetchedDocs = await getDocs(q);
      const questions = fetchedDocs.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      commit('setQuestions', questions);
    },
    async loadRecentQuestions({ commit }) {
      const q = query(
        collection(db, 'questions'),
        orderBy('createdAt', 'desc'),
        limit(10)
      );
      const fetchedDocs = await getDocs(q);
      const questions = fetchedDocs.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      commit('setRecentQuestions', questions);
    },
    async logUserIn({ commit }) {
      const user = await signInGoogle();
      commit('setUser', user);
    },
    async logUserOut({ commit }) {
      signOutGoogle();
      commit('setUser', null);
    },
  },
});
