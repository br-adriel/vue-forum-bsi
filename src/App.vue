<template>
  <MyHeader />
  <router-view></router-view>
</template>

<script>
import '@/assets/css/global.css';
import MyHeader from './components/MyHeader.vue';

export default {
  name: 'App',
  components: { MyHeader },
};
</script>

<style></style>
