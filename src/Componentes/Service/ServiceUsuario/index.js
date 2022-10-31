import api from "../api";

export const postUsuario = (user) => {
    return api
      .post(`/usuarios/create`, user)
      .then((response) => response.data)
      .catch(function (error) {
        console.log("error: ", error);
      });
  };