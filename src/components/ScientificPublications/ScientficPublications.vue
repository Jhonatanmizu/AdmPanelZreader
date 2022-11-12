<template>
  <div class="container p">
    <div class="add-container">
      <ButtonWithIcon :handle="toggleForm">
        <i class="fa-solid fa-plus"></i>
      </ButtonWithIcon>
    </div>
    <form class="form" v-if="isFormOpen">
      <div class="form__controls">
        <div class="input__group">
          <label for="text" class="input-label">Texto</label>
          <input
            type="text"
            class="input-text"
            v-model="formData.text"
            id="text"
          />
        </div>
        <div class="input__group">
          <label for="link" class="input-label">link</label>
          <input
            type="text"
            class="input-text"
            v-on:change="alert('fom', formData)"
            v-model="formData.link"
            id="link"
          />
        </div>
      </div>
      <div class="form__actions">
        <Button text="Cancelar" :handle="toggleForm" />
        <Button
          text="Salvar"
          :handle="addPublication"
          action="save"
          :isDisabled="checkFormData()"
        />
      </div>
    </form>
    <div class="publications">
      <div
        class="publication"
        v-for="publication of publications"
        :key="publication"
      >
        {{ publication.text }}
        <!-- <div class="text__publication">
          <a :href="publication.link"> {{ publication.text }} </a>
        </div>
        <div class="actions__pubclication">
          <ButtonWithIcon :handle="removePublication(publication)">
            <i class="fa-solid fa-trash"></i>
          </ButtonWithIcon>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ButtonWithIcon from "../Button/ButtonWithIcon.vue";
import Button from "../Button/Button.vue";
export default {
  name: "ScientificPublications",
  data() {
    return {
      isFormOpen: false,
      publications: [
        {
          id: 1,
          text: "Publicao 1",
          link: "www.google.com",
        },
      ],
      formData: {
        text: "",
        link: "",
      },
    };
  },
  methods: {
    clearForm() {
      this.formData.text = "";
      this.formData.link = "";
    },
    handleFormSubmit(e) {
      e.preventDefault();
      this.publications.push(this.formData);
    },
    toggleForm() {
      console.log("TOOGLE");
      this.clearForm();
      this.isFormOpen = !this.isFormOpen;
      console.log("ISFORM", this.isFormOpen);
    },
    checkFormData() {
      if (!this.formData.text || !this.formData.link) {
        return true;
      } else {
        return false;
      }
    },
    addPublication() {
      console.log("PUBLIC", this.publications);
      console.log("data", this.formData);
      this.publications.push(this.formData);
      this.clearForm();
    },
    removePublication(index) {
      this.publications.splice(index, 1);
    },
  },

  components: { ButtonWithIcon, Button },
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
.publications {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin: 0.3rem 0;
}
.publications .publication {
  background-color: var(--alt-color);
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
}
.publication .text__publication a {
  color: var(--tertiary-color);
  font-weight: 500;
  text-decoration: none;
}
.add-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 0.5rem 0;
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
