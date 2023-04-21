<template>
  <div class="container">
    <main>
      <MyCreatePostForm />
      <section>
        <h2>Dúvidas e Perguntas</h2>
        <div class="questions">
          <h3 class="no-questions" v-if="!questions || !questions.length">
            Nenhuma pergunta disponivel ...T_T
          </h3>
          <MyPost
            v-else
            v-for="question of questions"
            :post="question"
            :key="question.id"
          />
        </div>
      </section>
    </main>
    <aside>
      <h2>Recentes</h2>
      <div class="recents">
        <h3 class="no-recents" v-if="!questions || !questions.length">
          Nenhuma pergunta disponivel ...T_T
        </h3>
        <MyPost
          detailed
          v-else
          v-for="question of questions"
          :post="question"
          :key="question.id"
        />
      </div>
    </aside>
  </div>
</template>

<script>
import MyCreatePostForm from '@/components/MyCreatePostForm.vue';
import MyPost from '@/components/MyPost.vue';

export default {
  name: 'MyHome',
  components: { MyCreatePostForm, MyPost },
  computed: {
    questions() {
      return this.$store.getters.getQuestions;
    },
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.$store.dispatch('loadQuestions');
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
