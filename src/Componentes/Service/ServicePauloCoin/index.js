import api from "../api";


  export const putCarteira = (id, carteiraAtlz) => {
    return api.put(`/carteiras/id=${id}`,{carteiraAtlz }).then((response) => response.data);
  };
  
  // export const deleteUsuario = (id) => {
  //   return api.delete(`/usuarios/${id}`).then((response) => response.data);
  // };
  
  export const getPauloCoin = (id) => {
    return api.get(`/paulocoins/${id}`).then((response) => 
    response.data
     );
    
  };