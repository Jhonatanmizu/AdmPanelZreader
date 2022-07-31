<template>
  <div class=" content">
    <Accordion title="Cabeçalho">
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in blanditiis veritatis dignissimos nisi
        soluta
        debitis, autem voluptates, praesentium quia dolorem modi minus cum possimus cupiditate. Fugiat blanditiis
        placeat
        accusantium.</p>
    </Accordion>
    <Accordion title="Descrição">
      <Input placeholder="Sua plataforma de jogos"></Input>
    </Accordion>
  </div>
</template>

<script>
import Accordion from '../shared/Accordion.vue';
export default {
  name: "ContentHome",
  components: { Accordion },

}
</script>
<style>
.content {
  padding: 4rem 5.5rem 1rem 5.5rem;

  height: 100vh;
  background-color: var(--secondary-color);
}
</style>
