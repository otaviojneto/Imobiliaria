import axios from 'axios';

export const infosImobiliaria = axios.create({
  baseURL: process.env.REACT_APP_API,
});
