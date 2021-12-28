import axios from 'axios';

const url = 'http://localhost:5000/api/';

const api = axios.create({
  baseURL: url,
});

export const getList = () => {
  return api.get('/list').then((res) => res.data);
};

export const updateList = (list) => {
  return api.post('/upload/json', { list }).then((res) => res.data);
};

export const addFighter = (fighter) => {
  return api.post('/add', fighter).then((res) => res.data);
};

export const updateFighter = (fighter, id) => {
  return api.put(`/update/${id}`, fighter).then((res) => res.data);
};
