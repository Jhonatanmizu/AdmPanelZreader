<template>
  <div class="container">
    <div class="content">
      <Input label="Logomarca" :upload="true"></Input>
      <Input label="Imagem de cabeçalho" :upload="true"></Input>

      <div class="input__group">
        <label for="slogan" class="input-label">Slogan</label>
        <input type="text" id="slogan" class="input-text" />
      </div>
      <div class="input__group">
        <label for="mensagem" class="input-label" v-on:click="logInForm"
          >Mensagem</label
        >
        <input
          type="text"
          id="slogan"
          v-model="header.slogan"
          class="input-text"
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
  padding: 2.4rem 3.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  gap: 0.5rem;
}
@media screen and (max-width: 800px) {
  .container .content {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
}
</style>
