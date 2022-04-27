<template>
  <div class="home">
    <HeaderHome />
    <ContentHome />
    <LoadingSpinner />
    <FooterHome />
  </div>
</template>

<script>
import HeaderHome from "../components/Home/HeaderHome.vue";
import FooterHome from "../components/Home/FooterHome.vue";
import ContentHome from "@/components/Home/ContentHome.vue";
import LoadingSpinner from "../shared/LoadingSpinner.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { HeaderHome, FooterHome, ContentHome, LoadingSpinner },
};
</script>
