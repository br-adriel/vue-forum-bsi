<template>
  <div :class="[detailed ? 'detailed' : '', 'myPost']">
    <div class="myPost__top">
      <h3>Não consigo mudar a versão do meu Node no linux, como faço?</h3>
    </div>
    <div class="myPost__bottom">
      <h4 class="myPost__author">Gustavo</h4>
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
    detailed: {
      default: false,
      type: Boolean,
      required: false,
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
  padding: 28px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.myPost__actions button img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.myPost__actions.myPost.detailed button img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style>
