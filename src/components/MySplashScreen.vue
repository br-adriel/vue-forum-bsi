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
  width: 263px;
  height: 263px;
  object-fit: contain;
}
</style>
