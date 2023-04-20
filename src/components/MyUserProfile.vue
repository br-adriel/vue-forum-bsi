<template>
  <div>
    <img src="@/assets/img/profile.jpg" alt="Sua imagem de perfil" />
    <h4>Nome de usuário</h4>
  </div>
</template>

<script>
export default {
  name: 'MyUserProfile',
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  font-size: var(--font-size-normal);
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
  h4 {
    display: block;
  }
}
</style>
