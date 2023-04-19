<template>
  <section>
    <img
      src="@/assets/img/logo.png"
      title="Logo do Forum BSI"
      alt="Letra f maiúscula estilizada com tons da cor rosa"
    />
  </section>
</template>

<script>
export default {
  name: 'MySplashScreen',
};
</script>

<style scoped>
section {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
