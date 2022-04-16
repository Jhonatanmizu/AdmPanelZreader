<template>
  <main class="form-signin">
    <form @submit.stop.prevent="login">
      <img
        class="mb-4"
        src="https://lh5.googleusercontent.com/CP1iW0LKcx6T6M2WJVz543EDb0TGQBjwc8irGPmtqrbL4awxOXljqb4vi4eRMyEYDInTMguaVVJaUIvcpvx4ILc=w16383"
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 fw-bold">Bem vindo</h1>

      <div class="form-floating mb-2">
        <input
          type="text"
          v-model="user"
          class="form-control"
          id="floatingInput"
          placeholder="Nome de usuário"
        />
        <label for="floatingInput">Usuário</label>
      </div>
      <div class="form-floating">
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Senha"
        />
        <label for="floatingPassword">Senha</label>
      </div>

      <button class="w-100 btn btn-lg btn-danger" type="submit">Login</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import Cookie from "js-cookie";
export default {
  name: "LoginForm",
  props: {
    msg: String,
  },
  created() {
    // Cookie.remove("_app_token");
  },
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      const baseUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
      console.log("logando.....");

      const payload = {
        user: this.user,
        password: this.password,
      };
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Access: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .post(baseUrl)
        .then((resp) => {
          console.log(resp.data);
          Cookie.set("_app_token", resp.acces_token);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  text-align: center;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
