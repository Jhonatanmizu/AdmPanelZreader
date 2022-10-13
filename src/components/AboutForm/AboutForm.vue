<template>
  <div class="container">
    <div class="content p">
      <div class="input__group">
        <label for="title" class="input-label"> Título </label>
        <input type="text" name="title" id="title" class="input-text" />
      </div>
      <div class="input__group">
        <label for="video" class="input-label">Vídeo 1</label>
        <input type="text" class="input-text" placeholder="Título do vídeo" />
        <input type="text" class="input-text" placeholder="link do vídeo" />
      </div>
      <div class="input__group">
        <label for="description" class="input-label"> Descrição </label>
        <textarea
          class="textarea"
          name="description"
          id="description "
        ></textarea>
      </div>

      <div class="input__group">
        <label for="video2" class="input-label">Vídeo 2</label>
        <input type="text" class="input-text" placeholder="Título do vídeo" />
        <input type="text" class="input-text" placeholder="link do vídeo" />
      </div>
    </div>
    <div class="information p">
      <h3>Informação</h3>
      <div class="information__container">
        <div class="info__group">
          <input type="text" icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 80% 20%;
}
.input__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.input__group .textarea {
  width: 56rem;
  height: 20rem;
  padding: 0.5rem;
  border: none;
  border: 0.2rem solid var(--light-bg);
  resize: none;
  font-size: 1.8rem;
  /* background-color: var(--alt-color); */
  background-color: var(--grey-variant);

  border-radius: 0.5rem;
  outline: none;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.information {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
  width: 100%;
}
.information__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr auto;
}
@media screen and (max-width: 800px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .input__group .textarea {
    width: 100%;
    /* height: 20; */
  }
}
</style>
