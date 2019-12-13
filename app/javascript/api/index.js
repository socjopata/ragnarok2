import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

const extractData = ({ data }) => data;

export const fetchHeroes = () => api.get('/heroes').then(extractData);
export const fetchAdvantages = () => api.get('/advantages').then(extractData);
export const fetchImplants = () => api.get('/implants').then(extractData);
export const fetchHexeris = () => api.get('/hexeris').then(extractData);
