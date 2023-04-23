<template>
  <!-- Lista resultado da busca realizada ao submeter formulário de pesquisa -->
  <div class="container">
    <main>
      <h2 v-if="query">Perguntas feitas por "{{ query }}"</h2>
      <div v-if="!resultado || !resultado.length" class="no-results">
        <h3>Nenhuma pergunta disponivel ...T_T</h3>
      </div>
      <section v-if="resultado && resultado.length">
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
import { db } from '@/firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default {
  name: 'MySearch',
  components: { MyQuestion },
  computed: {
    /** Guarda os termos de busca usados na URL */
    query() {
      return this.$route.query.content;
    },
  },
  data() {
    return {
      resultado: [], // guarda o resultado da busca
    };
  },
  methods: {
    /** Recupera questões do banco de dados de acordo com o nome do autor passado */
    async searchQuestionsByAuthor(authorName) {
      const q = await query(
        collection(db, 'questions'),
        where('author', '==', authorName)
      );

      const results = await getDocs(q);
      this.resultado = results.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    },
  },
  mounted() {
    this.searchQuestionsByAuthor(this.query); // realiza busca ao iniciar o componente
  },
  watch: {
    /** monitora url para detectar novas pesquisas */
    query(newValue) {
      this.searchQuestionsByAuthor(newValue);
    },
  },
};
</script>

<style scoped>
.container,
main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

main {
  padding: 16px 32px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
}
</style>
