import Cookie from "js-cookie";
export default {
  auth(to, from, next) {
    console.log(to, from, next);
    const token = Cookie.get("_app_token");
    // Fazer um ajax para checar  a validade do token
    if (!token) {
      next("/login");
    } else {
      next();
      console.log(token);
    }
  },
};
