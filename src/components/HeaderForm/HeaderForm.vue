<template>
  <div class="container">
    <div class="content">
      <div class="input__group">
        <label for="slogan" class="input__label">Slogan</label>
        <input
          type="text"
          name=""
          id=""
          class="input__control"
          placeholder="Digite o slogan"
        />
      </div>
      <div class="input__group">
        <label for="slogan" class="input__label">Mensagem</label>
        <input
          type="text"
          name=""
          id=""
          class="input__control"
          placeholder="Digite a mensagem"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderForm",
  data() {
    return {
      header: {
        slogan: "",
        mensagem: "",
        logo: "",
        imgHeader: "",
      },
    };
  },
  methods: {
    logInForm() {
      console.log(this.header.slogan);
    },
  },
};
</script>

<style scoped>
.container .content {
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  gap: 0.5rem;
}
.content .input__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.content .input__group .input__label {
  font-size: 2.8rem;
}
.content .input__group .input__control {
  width: 100%;
  border: none;
  height: 4.5rem;
  padding: 0.5rem;
  outline: none;
  background-color: var(--grey-variant);
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
}
.content .input__group .input__control:hover {
  outline: 0.1rem solid var(--primary-color);
}

@media screen and (max-width: 800px) {
  .container .content {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
}
</style>
