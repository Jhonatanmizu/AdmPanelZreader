<template>
  <header id="header">
    <div class="header__logo">
      <img
        src="../../assets/zreaderLogo.svg"
        class="zreader-logo"
        alt="Zreader logo"
      />
      <p>Sua plataforma de jogos educativos.</p>
    </div>
    <h3 class="header__title">Bem vindo, usuário</h3>
    <!-- <div class="header__title">
    </div> -->

    <button class="header__btn" @click="logout">
      <span>Sair</span>
    </button>
    <!-- <div class="header__container">
      <div class="title">
        <h3>Bem vindo, usuário</h3>
      </div>
      <button class="btn-logout">
        Sair
      </button>
    </div> -->
  </header>
</template>

<script>
import api from "@/services/api";

import Cookie from "js-cookie";

export default {
  name: "Header-home",
  methods: {
    logout() {
      api
        .post("logout")
        .then((resp) => {
          console.log("LOGOUT", resp);
          Cookie.remove("_app_token");
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
    },
  },
};
</script>

<style scoped>
#header {
  border: bottom 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.5rem;
  padding: 1rem 5.5rem;
  background: linear-gradient(270deg, #c10c25 50%, rgba(231, 43, 69, 0) 81.68%),
    #f0565c;
  mix-blend-mode: normal;
  text-align: center;
}

a {
  color: #fff;
  text-decoration: none;
  font-family: "Open sans", sans-serif;
}

.header__logo {
  min-height: 6.25rem;
  display: flex;
  position: relative;
  width: 25rem;
  transition: all 1s ease-in-out;
}

.zreader-logo {
  position: absolute;
  top: 1.25rem;
  height: 6rem;
  width: 6rem;
}

.header__logo p {
  position: absolute;
  top: 5.625rem;
  font-size: 1rem;
  left: 7.5rem;
}

#header .header__title {
  color: var(--secondary-color);
}

#header .header__btn {
  /* width: rem; */
  background-color: var(--alt-color);
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}

#header .header__btn:active {
  opacity: 0.8;
}

@media screen and (max-width: 1000px) {
  #header {
    padding: 1rem;
  }
}
</style>
