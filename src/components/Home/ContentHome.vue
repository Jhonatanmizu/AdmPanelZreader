<template>
  <div class="content">
    <Accordion title="Cabeçalho">
      <HeaderForm />
    </Accordion>
    <Accordion title="Descrição"></Accordion>
    <Accordion title="Proposta"></Accordion>

    <Accordion title="Sobre o projeto">
      <AboutForm />
    </Accordion>
    <Accordion title="Publicações científicas">
      <ScientficPublications />
    </Accordion>
    <Accordion title="Jogos"></Accordion>
  </div>
</template>

<script>
import Accordion from "../shared/Accordion.vue";

import HeaderForm from "../HeaderForm/HeaderForm.vue";
import AboutForm from "../AboutForm/AboutForm.vue";
import ScientficPublications from "../ScientificPublications/ScientficPublications.vue";

export default {
  name: "ContentHome",
  components: { Accordion, HeaderForm, AboutForm, ScientficPublications },
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
