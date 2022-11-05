<template>
  <div class="container p">
    <div class="row-add">
      <ButtonWithIcon :handle="() => toggleIsVisible()">
        <i class="fa-solid fa-plus"></i>

      </ButtonWithIcon>
    </div>
    <Transition name="fade">
      <form class="form" @submit="handleFormSubmit" v-if="isVisible">
        <div class="form__controls">
          <div class="input__group">
            <input type="hidden" name="id" v-model="formData.id">
          </div>
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
          <Button text="Cancelar" type="button" @click="clearFormData" />
          <Button text="Salvar" type="submit" action="save" :isDisabled="checkFormData()" />
        </div>
      </form>
    </Transition>
    <Transition name="fade">
      <div class="publications__container" v-if="!isVisible">
        <ul class="publications">
          <li class="publication" v-for="publication in publications" :key="publication">
            <a :href="publication.link" target="_blank"> {{ publication.text }}</a>
            <div class="publication__actions">

              <ButtonWithIcon edit :handle="() => editPublication(publication.id)">
                <i class="fa-solid fa-pen-to-square"></i>

              </ButtonWithIcon>
              <ButtonWithIcon :handle="() => deletePublication(publication.id)">
                <i class="fa-solid fa-trash"></i>
              </ButtonWithIcon>
            </div>
          </li>
        </ul>
        <!-- <div class="publication" v-for="publication in publications" :key="publication"> -->

        <!-- </div> -->
      </div>
    </Transition>

  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../Button/Button.vue";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon.vue";

export default {
  setup() {
    const publications = ref([
      {
        id: 1,
        text: "alog",
        link: "google.com",
      }
    ])
    const formData = ref({
      id: null,
      text: "",
      link: "",
    });
    const isVisible = ref(false)
    const toggleIsVisible = () => {
      console.log("TOGGLE");
      isVisible.value = !isVisible.value
      console.log("ISVISIBLE", isVisible.value);
    }
    const logData = () => {
      console.log(publications);
    }
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log("FORM DATA", formData.value);
      let model = {
        ...formData.value,
        id: publications.value.length
      }
      if (model)
        publications.value.push(model)
      clearFormData()
    };
    const getPublications = () => {
      for (let i = 0; i < 3; i++) {
        publications.value.push()

      }
    }
    const editPublication = (id) => {
      toggleIsVisible()
      let found = publications.value.find(p => p.id === id)
      formData.value = {
        id: found.id,
        text: found.text,
        link: found.link
      }
      console.log("FOUND", found);
      console.log("FORM DATA", formData.value);

    }
    const deletePublication = (id) => {
      // TODO Lógica cabulosa
      console.log("DELETANDO", id);
      publications.value = publications.value.filter(p => p.id != id)
      console.log("PUBLICATIONS", publications.value);
      getPublications()

    }
    const checkFormData = () => {
      if (!formData.value.text || !formData.value.link) {
        return true;
      } else {
        return false;
      }
    };
    const clearFormData = () => {
      formData.value = {
        id: null,
        text: null,
        link: null
      }
      toggleIsVisible()
    }
    return {
      formData,
      handleFormSubmit,
      checkFormData,
      publications,
      logData,
      deletePublication,
      editPublication,
      clearFormData,
      isVisible,
      toggleIsVisible
    };
  },
  components: { Button, ButtonWithIcon },
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
  gap: 2rem
}

.publications__container {
  width: 100%;
  margin-top: .2rem 0;

}

.publications {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: .3rem;
}

.publications .publication {
  background-color: var(--alt-color);
  padding: .5rem;
  border-radius: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

}

.publication .publication__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.row-add {
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 1rem 0;
  width: 100%;
}

@media screen and (max-width: 800px) {
  .form__controls {
    flex-direction: column;
  }

  .form__actions {
    width: 100%;
    align-items: center;
    justify-content: center;
    /* justify-content: space-between; */
  }

}
</style>
