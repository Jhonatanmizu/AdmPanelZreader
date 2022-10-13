<template>
  <div class="content">
    <Accordion title="Cabeçalho">
      <HeaderForm></HeaderForm>
    </Accordion>
    <Accordion title="Sobre o projeto">
      <AboutForm></AboutForm>
    </Accordion>
  </div>
</template>

<script>
import Accordion from "../shared/Accordion.vue";

import HeaderForm from "../HeaderForm/HeaderForm.vue";
import AboutForm from "../AboutForm/AboutForm.vue";

export default {
  name: "ContentHome",
  components: { Accordion, HeaderForm, AboutForm },
  // components: { Accordion },
};
</script>
<style scoped>
.content {
  margin: 0 auto;
  padding: 3rem 5.5rem;

  min-height: 100vh;
  background-color: var(--secondary-color);
}
</style>
