<template>
  <div class=" content">
    <Accordion title="Cabeçalho">
      <Input label="Logo Marca" :upload="true"> </Input>
      <Input label="Slogan" placeholder="Descrição" :upload="false"> </Input>

    </Accordion>
    <Accordion title="Descrição">
      <!-- <Input label="Logo Marca" :upload="true"> </Input> -->
    </Accordion>
  </div>
</template>

<script>
import Accordion from '../shared/Accordion.vue';
import Input from '../shared/Input.vue';

export default {
  name: "ContentHome",
  components: { Accordion, Input },
  // components: { Accordion },

}
</script>
<style scoped>
.content {
  margin: 0 auto;
  padding: 3rem 5.5rem;

  height: 100vh;
  background-color: var(--secondary-color);
}
</style>
