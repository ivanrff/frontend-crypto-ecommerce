import api from "../api";

export const getMoeda = () => {
    return api.get(`/moedas`).then((response) => 
    response.data);
    
  };