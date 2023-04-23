<template>
  <div class="container">
    <main>
      <!-- Formulário para criação de questões-->
      <MyCreateQuestionForm />

      <!-- Feed de questões -->
      <section>
        <h2>Dúvidas e Perguntas</h2>
        <div class="questions">
          <h3 class="no-questions" v-if="!questions || !questions.length">
            Nenhuma pergunta disponivel ...T_T
          </h3>
          <MyQuestion
            v-else
            v-for="question of questions"
            :post="question"
            :key="question.id"
          />
        </div>
      </section>
    </main>

    <!-- Listagem de questões recentes -->
    <aside>
      <h2>Recentes</h2>
      <div class="recents">
        <h3
          class="no-recents"
          v-if="!recentQuestions || !recentQuestions.length"
        >
          Nenhuma pergunta disponivel ...T_T
        </h3>
        <MyQuestion
          detailed
          v-else
          v-for="question of recentQuestions"
          :post="question"
          :key="question.id"
        />
      </div>
    </aside>
  </div>
</template>

<script>
import MyCreateQuestionForm from '@/components/MyCreateQuestionForm.vue';
import MyQuestion from '@/components/MyQuestion.vue';

export default {
  name: 'MyHome',
  components: { MyCreateQuestionForm, MyQuestion },
  computed: {
    /** Armazena as questões exibidas */
    questions() {
      return this.$store.getters.getQuestions;
    },
    /** Armazena as questões recentes exibidas */
    recentQuestions() {
      return this.$store.getters.getRecentQuestions;
    },
  },
  mounted() {
    /** Aciona actin para puxar questões do banco de dados  */
    this.$store.dispatch('loadQuestions');
    /** Aciona actin para puxar questões recentes do banco de dados  */
    this.$store.dispatch('loadRecentQuestions');
  },
};
</script>

<style scoped>
h2 {
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--color-primary);
}

.container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

main {
  display: flex;
  flex-direction: column;
  padding: 18px 32px;
  min-height: 100%;
  flex-grow: 1;
}

main section {
  margin-top: 80px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

main .questions,
aside .recents {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  flex-grow: 1;
}

main .no-questions,
aside .no-recents {
  text-align: center;
  margin: auto;
}

aside {
  width: min(100%, 407px);
  padding: 16px 12px;
  background: var(--color-bg-300);
  border-left: 1px solid var(--color-bg-500);
  display: none;
  flex-direction: column;
}

@media screen and (min-width: 992px) {
  aside {
    display: flex;
  }
}
</style>
