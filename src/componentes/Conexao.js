
import axios from 'axios';

export const api= axios.create({
    baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit',
}); 


export const createSession =async (email,password)=>{
    return api.post("/auth/login", {email,password});
}

export const getUsers =async()=>{
    return api.get('/users');
}