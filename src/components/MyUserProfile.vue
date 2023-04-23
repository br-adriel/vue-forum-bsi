<template>
  <!-- Interface de autenticação da aplicação -->
  <div v-if="user" class="user-info">
    <img :src="user.photo" alt="Sua imagem de perfil" />
    <div class="user-name">
      <h4>{{ user.displayName }}</h4>
      <button @click="signOut" type="button">Sair</button>
    </div>
  </div>
  <button v-else @click="openSignIn" type="button">Entrar</button>
</template>

<script>
export default {
  name: 'MyUserProfile',
  computed: {
    /** Guarda informações do usuário logado */
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    /** Invoca a action de login de usuário */
    openSignIn() {
      this.$store.dispatch('logUserIn');
    },
    /** Invoca a action de logout */
    signOut() {
      this.$store.dispatch('logUserOut');
    },
  },
};
</script>

<style scoped>
button {
  font-size: var(--font-size-sm);
  padding: 0;
  color: var(--color-primary);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: var(--font-size-normal);
  flex-direction: column;
}

.user-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}

img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: var(--shadow-top-right);
}

h4 {
  display: none;
}

@media screen and (min-width: 576px) {
  .user-info {
    flex-direction: row;
    gap: 16px;
  }

  h4 {
    display: block;
  }
}
</style>
