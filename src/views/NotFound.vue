<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">Erro</div>
      <div class="card-body">
        <h5 class="card-title">
          Infelizmente a página solicitada não existe :(
        </h5>
        <p class="card-text">Clique no botão para retornar</p>
        <router-link to="/"
          ><button class="btn btn-danger" type="button">
            Voltar
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped></style>
