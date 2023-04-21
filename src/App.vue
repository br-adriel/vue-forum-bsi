<template>
  <Transition>
    <MySplashScreen v-if="isAppStarting" />
  </Transition>

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
  data() {
    return {
      isAppStarting: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isAppStarting = false;
    }, 2000);
  },
};
</script>

<style>
.v-leave-active {
  transition: opacity 300ms ease-out;
}

.v-leave-to {
  opacity: 0;
}
</style>
