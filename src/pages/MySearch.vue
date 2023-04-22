<template>
  <div class="container">
    <main>
      <h2>Mostando resultados para "{{ query }}"</h2>
      <h3 v-if="!resultado || !resultado.length" class="no-results">
        Nenhuma pergunta disponivel ...T_T
      </h3>
      <section>
        <MyQuestion
          v-for="question of resultado"
          :post="question"
          :key="question.id"
        />
      </section>
    </main>
  </div>
</template>

<script>
import MyQuestion from '@/components/MyQuestion.vue';

export default {
  name: 'MySearch',
  components: { MyQuestion },
  computed: {
    query() {
      return this.$route.query.content;
    },
    resultado() {
      return () => {
        return [];
      };
    },
  },
};
</script>

<style scoped>
.container,
main {
  flex-grow: 1;
  display: flex;
}
.container {
  flex-direction: column;
}

main {
  padding: 16px 32px;
  flex-wrap: wrap;
}

h2 {
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  font-weight: 700;
  margin-bottom: 16px;
  width: 100%;
}

section {
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.no-results {
  text-align: center;
  flex-grow: 1;
  align-self: center;
}
</style>
