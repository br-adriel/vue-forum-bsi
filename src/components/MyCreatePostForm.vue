<template>
  <form @submit.prevent="sendForm">
    <textarea
      name="postContent"
      id="postContent"
      rows="1"
      placeholder="Escreva aqui sua duvida ou problema..."
      required
      v-model="question.content"
    ></textarea>
    <button type="submit" title="Publicar">
      <img
        src="@/assets/img/icons/icon-send.svg"
        alt="Ícone de avião de papel"
      />
    </button>
  </form>
</template>

<script>
export default {
  name: 'MyCreatePostForm',
  data() {
    return {
      question: {
        content: '',
      },
    };
  },
  methods: {
    sendForm(e) {
      this.$store.dispatch('createQuestion', this.question);
      e.target.reset();
    },
  },
};
</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-300);
  padding: 30px 25px;
  border-radius: var(--border-radius);
  gap: 20px;
}

textarea {
  width: 100%;
  resize: vertical;
  min-height: calc(1rem + 4px);
  padding: 0;
  resize: vertical;
}

button {
  border-radius: 8px;
}

button img {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

button:hover {
  filter: brightness(1.3);
}
</style>
