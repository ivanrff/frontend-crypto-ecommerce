import api from "../api";


  export const putCarteira = (id, carteiraAtlz) => {
    return api.put(`/carteiras/${1}`,carteiraAtlz).then((response) => response.data);
  };
  
  // export const deleteUsuario = (id) => {
  //   return api.delete(`/usuarios/${id}`).then((response) => response.data);
  // };
  
  export const getCarteiraByUsuarioId = (id) => {
    return api.get(`/carteiras/usuario/${id}`).then((response) => 
    response.data);
    
  };