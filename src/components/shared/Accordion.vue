<template>
  <div class="accordion">
    <div class="accordion__header">
      <span class="accordion__text">{{ title }}</span>
      <div class="toggle" @click="toggleBody">
        <i
          :class="{ 'fa-solid fa-plus': !isOpen, 'fa-solid fa-minus': isOpen }"
        ></i>
      </div>
    </div>
    <div class="accordion__body" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionComponent",

  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleBody() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.accordion {
  max-width: 100%;
  min-height: 7.2rem;
  border-radius: 1rem;
  border: 0.1rem solid #9d9191;
  margin: 2rem auto;
  padding: 1rem 0;
  background-color: var(--light-bg);
}

.accordion__header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
}

.accordion__header .accordion__text {
  font-weight: 500;
  font-size: 2.8rem;
  text-transform: capitalize;
}

.accordion__header .toggle {
  color: var(--primary-color);
  font-size: 4rem;
  cursor: pointer;
}
.accordion__body {
  width: 100%;
  border-top: 0.1rem solid #9d9191;
}
</style>
