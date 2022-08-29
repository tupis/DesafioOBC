import axios from 'axios';

const baseURL = 'http://localhost:3000/'

const API = axios.create({
    baseURL
})

export default API;