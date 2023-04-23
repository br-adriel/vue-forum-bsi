<template>
  <!-- A classe detailed controla a disposição dos elementos e a exibição ou não
    do nome do autor da pergunta -->
  <div :class="[detailed ? 'detailed' : '', 'myPost']">
    <div class="myPost__top">
      <h3>{{ post.content }}</h3>
    </div>
    <div class="myPost__bottom">
      <h4 class="myPost__author">{{ post.author }}</h4>
      <div class="myPost__actions">
        <button type="button" title="Favoritar">
          <img src="@/assets/img/icons/icon-heart.svg" alt="Ícone de coração" />
        </button>
        <button type="button" title="Gostei">
          <img
            src="@/assets/img/icons/icon-thumbs-up.svg"
            alt="Ícone de mão com dedão para cima"
          />
        </button>
        <button type="button" title="Não gostei">
          <img
            src="@/assets/img/icons/icon-thumbs-down.svg"
            alt="Ícone de mão com dedão para baixo"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPost',
  props: {
    // Quando true o autor do post é exibido e tem seus elementos dispostos
    // verticalmente, quando false o contrário ocorre.
    detailed: {
      default: false,
      type: Boolean,
      required: false,
    },
    // Guarda as informações referentes a questão exibida
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.myPost {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-300);
  border-radius: var(--border-radius);
}

.myPost.detailed {
  flex-direction: column;
  align-items: stretch;
  backdrop-filter: blur(2px);
  background-color: var(--color-bg-100);
}

.myPost__top {
  padding: 22px 25px 24px;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
}

.myPost.detailed .myPost__top {
  padding: 19px 23px 30px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
}

.myPost__top h3 {
  font-weight: 700;
  font-size: var(--font-size-normal);
}

.myPost.detailed .myPost__top h3 {
  font-size: var(--font-size-normal-lg);
}

.myPost__bottom {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-bg-500);
  align-self: stretch;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
}

.myPost.detailed .myPost__bottom {
  display: flex;
  align-items: center;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

.myPost__author {
  display: none;
}

.myPost.detailed .myPost__author {
  display: inline-block;
  padding: 20px 18px;
  color: var(--color-primary);
  font-size: var(--font-size-normal);
  font-weight: 600;
}

.myPost__actions {
  padding: 12px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.myPost.detailed .myPost__actions {
  padding: 20px 18px;
}

.myPost__actions button img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

@media screen and (min-width: 768px) {
  .myPost__actions {
    padding: 28px 20px;
    gap: 10px;
  }

  .myPost__actions button img {
    width: 24px;
    height: 24px;
  }

  .myPost.detailed .myPost__actions button img {
    width: 20px;
    height: 20px;
  }
}
</style>
