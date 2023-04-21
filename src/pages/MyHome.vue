<template>
  <div class="container">
    <main>
      <MyCreatePostForm />
      <section>
        <h2>Dúvidas e Perguntas</h2>
        <div class="questions">
          <h3 class="no-questions">Nenhuma pergunta disponivel ...T_T</h3>
        </div>
      </section>
    </main>
    <aside>
      <h2>Recentes</h2>
      <div class="recents">
        <h3 class="no-recents">Nenhuma pergunta disponivel ...T_T</h3>
      </div>
    </aside>
  </div>
</template>

<script>
import MyCreatePostForm from '@/components/MyCreatePostForm.vue';

export default {
  name: 'MyHome',
  components: { MyCreatePostForm },
};
</script>

<style scoped>
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
  display: flex;
  flex-direction: column;
}

h2 {
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--color-primary);
}
</style>
