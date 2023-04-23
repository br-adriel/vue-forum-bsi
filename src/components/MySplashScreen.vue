<template>
  <!-- Tela de entrada mostrada quando a aplicação é aberta -->
  <!-- Componente nativo para transições de entrada/saída -->
  <Transition>
    <section v-if="isAppStarting">
      <img
        src="@/assets/img/logo.png"
        title="Logo do Forum BSI"
        alt="Letra f maiúscula estilizada com tons da cor rosa"
      />
    </section>
  </Transition>
</template>

<script>
export default {
  name: 'MySplashScreen',
  computed: {
    // Responsável por determinar se o componente deve ser exibido ou não
    isAppStarting() {
      return this.$store.getters.getIsAppStarting;
    },
  },
};
</script>

<style scoped>
section {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg-100);
  z-index: 2000;
}

img {
  object-fit: contain;
  width: auto;
  height: 263px;
  animation-name: pulsar;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.v-leave-active {
  transition: opacity 300ms ease-out;
}

.v-leave-to {
  opacity: 0;
}
</style>
