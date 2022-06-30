import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/'
});

export { api };