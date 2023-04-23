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
    isAppStarting: true, // determina se o app está inciando
    questions: [], // guarda as questões a serem exibidas no feed
    recentQuestions: [], // guarda as questões a serem exibidas na barra de recentes
    user: null, // guarda informações do usuário logado
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
    /** Adiciona questão ao início do array de questões */
    addQuestion(state, question) {
      state.questions.unshift(question);
    },
    setRecentQuestions(state, questions) {
      state.recentQuestions = questions;
    },
    /** Adiciona questão ao início do array de questões recentes */
    addRecentQuestion(state, question) {
      state.recentQuestions.unshift(question);

      // Caso a página de recentes já estivesse exibindo 10 questões antes dessa
      // ter sido adicionada, a mais antiga é removida
      if (state.recentQuestions.length > 10) {
        state.recentQuestions.pop();
      }
    },
    setUser(state, newUser) {
      state.user = newUser;
    },
  },
  actions: {
    /** Define appIsStarting como false 2 segundos após ser chamada */
    appStarted({ commit }) {
      setTimeout(() => {
        commit('setIsAppStarting', false);
      }, 2000);
    },
    /** Carrega nova questão para o banco de dados e a adiciona ao array de
     * questões */
    async createQuestion({ commit }, question) {
      const savedQuestion = await addDoc(collection(db, 'questions'), {
        ...question,
        interactions: 0,
        createdAt: serverTimestamp(),
      });
      commit('addQuestion', { id: savedQuestion.id, ...question });
      commit('addRecentQuestion', { id: savedQuestion.id, ...question });
    },
    /** Recupera as questões do banco de dados e as adiciona ao array de
     * questões */
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
    /** Recupera as últimas 10 questões do banco de dados e as adiciona ao array
     * de questões recentes */
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
    /** Abre a janela de login do Google e salva os dados do usuário na
     * aplicação */
    async logUserIn({ commit }) {
      const user = await signInGoogle();
      commit('setUser', user);
    },
    /** Realiza o logout do usuário e remove os dados do usuário da aplicação */
    async logUserOut({ commit }) {
      signOutGoogle();
      commit('setUser', null);
    },
    /** Recupera os dados do usuário do session storage */
    loadUserOnStart({ commit }) {
      const sessionToken = sessionStorage.getItem('@AuthFirebase:token');
      const sessionUser = sessionStorage.getItem('@AuthFirebase:user');
      if (sessionToken && sessionUser) {
        commit('setUser', JSON.parse(sessionUser));
      } else commit('setUser', null);
    },
  },
});
