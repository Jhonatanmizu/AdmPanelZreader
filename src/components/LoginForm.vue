<template>
  <main class="container slideInUp">
    <form @submit.stop.prevent="login" class="form">
      <div class="logo__container">
        <img src="../assets/zreaderLogo.svg" alt="Zreader logo" class="logo">
        <h3>Bem vindo ao painel administrativo</h3>
      </div>
      <div class="input__container">
        <label for="email">E-mail :</label>
        <input type="email" name="email" v-model="user" placeholder="Digite o seu usuário">
      </div>
      <div class="input__container">
        <label for="password">Senha :</label>
        <input type="password" name="password" v-model="password" placeholder="Digite a sua senha">
      </div>

      <button type="submit" class="btn btn-login">Login</button>

    </form>

  </main>
</template>

<script>
// import axios from "axios";
import api from '../services/api'
import Cookie from "js-cookie";
export default {
  name: "LoginForm",
  props: {
    msg: String,
  },
  created() {




  },
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      // const baseUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
      // console.log("logando.....");

      const payload = {
        email: this.user,
        password: this.password,
      };
      console.log("Payload", payload);
      api.post("login", JSON.stringify(payload)).then((resp) => {
        console.log(resp.data);
        this.$router.push('/')
        Cookie.set("_app_token", resp.data.token)
      }).catch((err) => {
        console.error(err);
      })

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.form {
  width: 40rem;
  min-height: 40rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);

}

.form .input__container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  margin: 1rem;
}

.form .input__container label {
  font-weight: 500;
  text-transform: uppercase;
}

.form .input__container input {
  width: 30rem;
  padding: 1.5rem;

  border: none;
  border-radius: .5rem;
  border: .2rem solid var(--alt-color);
  outline: none;
  outline-color: var(--primary-color);
}

.form .btn {
  width: 30rem;
  padding: 1rem;
  border: none;
  outline: none;
  background-color: var(--primary-color);
  border-radius: .5rem;
  font-weight: 500;
  color: var(--secondary-color);
  font-size: 2rem;
  cursor: pointer;
  transition: all .3s ease;
}

.form .btn:active {
  background-color: rgba(231, 43, 69, 0.6);
}

.form .btn:hover {
  background-color: rgba(231, 43, 69, 0.7);

}

.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    visibility: visible;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    visibility: visible;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
