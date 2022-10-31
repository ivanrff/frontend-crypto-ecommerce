import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
    /*http://localhost:8080/api/ */
    //CASO NECESSÁRIO, PASSAR O TOKEN
    //api de  agendamento
    //headers: {"Authorization" : "TOKEN"}
})
export default api;