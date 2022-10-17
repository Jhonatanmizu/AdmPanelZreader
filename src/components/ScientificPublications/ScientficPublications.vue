<template>
  <div class="container p">
    <form class="form" @submit="handleFormSubmit">
      <div class="form__controls">
        <div class="input__group">
          <label for="text" class="input-label">Texto</label>
          <input type="text" class="input-text" v-model="formData.text" />
        </div>
        <div class="input__group">
          <label for="link" class="input-label">link</label>
          <input type="text" class="input-text" v-model="formData.link" />
        </div>
      </div>
      <div class="form__actions">
        <Button text="Cancelar" />
        <Button
          text="Salvar"
          type="submit"
          action="save"
          :isDisabled="checkFormData()"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
import Button from "../Button/Button.vue";

export default {
  setup() {
    const formData = reactive({
      text: "",
      link: "",
    });
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log("FORM DATA", formData);
    };
    const checkFormData = () => {
      if (!formData.text || !formData.link) {
        return true;
      } else {
        return false;
      }
    };
    return {
      //   ...toRefs(state),
      formData,
      handleFormSubmit,
      checkFormData,
    };
  },
  components: { Button },
};
</script>

<style scoped>
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 100%;
}
.form__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form__actions {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}
@media screen and (max-width: 800px) {
  .form__controls {
    flex-direction: column;
  }
  .form__actions {
    justify-content: space-between;
  }
}
</style>
