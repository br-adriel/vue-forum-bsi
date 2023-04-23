<template>
  <!-- Header da aplicação -->
  <header>
    <div class="container">
      <MyUserProfile />
      <MySearchForm />
    </div>
  </header>
</template>

<script>
import MySearchForm from './MySearchForm.vue';
import MyUserProfile from './MyUserProfile.vue';

export default {
  name: 'MyHeader',
  components: { MySearchForm, MyUserProfile },
};
</script>

<style scoped>
header {
  background-color: var(--color-bg-100);
  padding: 16px 32px;
  border-bottom: 1px solid var(--color-bg-500);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
</style>
