<template>
  <div>
    <button
      :type="type"
      :disabled="isDisabled"
      :class="['action-btn', action == 'save' ? 'btn-save' : 'btn-cancel']"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ActionBtn",
  props: {
    type: String,
    text: String,
    action: String,
    isDisabled: Boolean,
  },
};
</script>

<style scoped>
.action-btn {
  width: 9.5625rem;
  padding: 0.5rem;
  height: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  border: none;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  font-size: 1.6rem;
  text-transform: uppercase;
  margin: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
  transition: all ease-in-out 0.3s;
}
.action-btn:active {
  transform: translate(0, 0.3rem);
  box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
}
.action-btn:disabled {
  opacity: 0.7;
}
.action-btn:hover {
  filter: brightness(110%);
}
.btn-save {
  background-color: var(--green-color);
}
.btn-cancel {
  background-color: var(--primary-color);
}
</style>
