<template>
  <form>
    <input
      type="search"
      name="searchTerms"
      id="searchTerms"
      placeholder="procure aqui..."
    />
    <button type="submit" title="Pesquisar">
      <img src="@/assets/img/icons/icon-search.svg" alt="Ícone de lupa" />
    </button>
  </form>
</template>

<script>
export default {
  name: 'MySearchForm',
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  background-color: var(--color-bg-300);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  max-width: 363px;
}

input {
  width: 100%;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
}

button img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}
</style>
