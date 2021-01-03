import apiClient from "../apiClient.js";

export const apiAuth = {
  isAuthenticated: false,
  signin(email, password, cb) {
    try {
      apiClient()
        .get("http://localhost/sanctum/csrf-cookie")
        .then((response) => {
          apiClient()
            .post("http://localhost/login", {
              email,
              password,
            })
            .then((response) => {
              apiAuth.isAuthenticated = response.data.error ? false : true;
              cb();
            });
        });
    } catch (error) {
      console.log(error);
    }
  },
  signout(cb) {
    apiAuth.isAuthenticated = false;
    try {
      apiClient().post("http://localhost/logout").then(cb());
    } catch (error) {
      console.log(error);
    }
  },
};
