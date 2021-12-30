import axios from 'axios';
import download from 'downloadjs';
import { toast } from 'react-toastify';

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

export const deleteFighter = (id) => {
  return api.delete(`/remove/${id}`).then((res) => res.data);
};

export const downloadJson = async () => {
  const res = await fetch('http://localhost:5000/api/download/json');
  const blob = await res.blob();
  download(blob, 'fightersList.json');
};

export const downloadCSV = async () => {
  const res = await fetch('http://localhost:5000/api/download/csv');
  const blob = await res.blob();
  download(blob, 'fightersList.csv');
};

export const callScript = async (toastId) => {
  axios
    .request({
      method: 'get',
      url: 'http://localhost:5000/api/script',
      onUploadProgress: (p) => {
        const progress = p.loaded / p.total;

        // check if we already displayed a toast
        if (toastId.current === null) {
          toastId.current = toast('Upload in Progress', {
            progress: progress,
          });
        } else {
          toast.update(toastId.current, {
            progress: progress,
          });
        }
      },
    })
    .then((res) => {
      toast.done(toastId.current);
      return res.data;
    });
  // const res = await fetch('http://localhost:5000/api/script').then(
  //   (res) => res.data
  // );
};
