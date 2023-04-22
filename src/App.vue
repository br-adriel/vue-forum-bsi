<template>
  <MySplashScreen />

  <MyHeader />
  <router-view></router-view>
</template>

<script>
import '@/assets/css/global.css';
import MyHeader from './components/MyHeader.vue';
import MySplashScreen from './components/MySplashScreen.vue';

export default {
  name: 'App',
  components: { MyHeader, MySplashScreen },
  mounted() {
    this.$store.dispatch('appStarted');
    this.$store.dispatch('loadUserOnStart');
  },
};
</script>
