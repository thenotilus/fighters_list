import axios from 'axios';
import download from 'downloadjs';
import { toast } from 'react-toastify';

const base_url = process.env.REACT_APP_API_URL;

//const url = 'http://localhost:5000/api/';

const api = axios.create({
  baseURL: base_url,
});

export const getList = () => {
  return api.get(base_url + '/list').then((res) => res.data);
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

export const deleteFighter = (id) => {
  return api.delete(`/remove/${id}`).then((res) => res.data);
};

export const downloadJson = async () => {
  const res = await fetch('http://51.15.90.2:5000/api/download/json');
  const blob = await res.blob();
  download(blob, 'fightersList.json');
};

export const downloadCSV = async () => {
  const res = await fetch('http://51.15.90.2:5000/api/download/csv');
  const blob = await res.blob();
  download(blob, 'fightersList.csv');
};
