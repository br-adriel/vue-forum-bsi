<template>
  <!-- Formulário para a busca de questões pelo nome do autor -->
  <form @submit.prevent="searchQuestions">
    <input
      type="search"
      name="searchTerms"
      id="searchTerms"
      placeholder="procure aqui..."
      v-model="search"
    />
    <button type="submit" title="Pesquisar">
      <img src="@/assets/img/icons/icon-search.svg" alt="Ícone de lupa" />
    </button>
  </form>
</template>

<script>
export default {
  name: 'MySearchForm',
  data() {
    return {
      search: '', // Mapeia os valores dos campos do formulário
    };
  },
  methods: {
    /** Redireciona o usuário para página de busca de questões */
    searchQuestions() {
      this.$router.push({ path: `/search`, query: { content: this.search } });
    },
  },
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
