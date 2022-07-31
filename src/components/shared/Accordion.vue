<template>
  <div class="accordion">
    <div class="accordion__header">
      <span class="accordion__text">{{ title }}</span>
      <div class="toggle" @click="toggleBody">
        <i :class="{ 'fa-solid fa-plus': !isOpen, 'fa-solid fa-minus': isOpen }"></i>
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
      isOpen: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleBody() {
      this.isOpen = !this.isOpen
    }
  },
};
</script>

<style scoped>
.accordion {
  min-width: 100%;
  min-height: 7.2rem;
  border-radius: 1rem;
  border: .1rem solid #9D9191;

  padding: 1rem;
  background-color: var(--light-bg);
}

.accordion__header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

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
}
</style>