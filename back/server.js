const express = require('express');
const cors = require('cors');
const {
  swapPositions,
  removeElement,
  getFile,
  writeFile,
  sortByPosition,
  addPos,
  insertElement,
  updatePosition,
  updateElement,
} = require('./utils');

const app = express();
app.use(cors());

app.use(express.json());

const fileName = './fightersList.json';
//const list = getFile(fileName);

app.get('/api/list', (req, res) => {
  const list = getFile(fileName);

  res.send(list);
});

// post route to add a new fighter to the list
app.post('/api/add', (req, res) => {
  const { position } = req.body;
  const list = getFile(fileName);

  const newFighter = {
    ...req.body,
    nickname: '',
    age: '',
    birthday: '',
    height: '',
    weight: '',
    weight_class: '',
    Wins: 0,
    Losses: 0,
    factorien: false,
  };
  insertElement(list, position, newFighter);
  let sortedlist = updatePosition(list);
  writeFile(fileName, sortedlist);

  res.send(sortedlist);
});

app.put('/api/swap', (req, res) => {
  const { index1, index2 } = req.body;
  swapPositions(list, index1, index2);
  let sortedlist = updatePosition(list);
  res.send(sortedlist);
});

// delete route to remove a fighter from the list
app.delete('/api/remove/:id', (req, res) => {
  const { id } = req.params;
  removeElement(list, id);
  let sortedlist = updatePosition(list);
  res.send(sortedlist);
});

// PUT route to update a fighter in the list
app.put('/api/update/:id', (req, res) => {
  const { position } = req.body;
  const { id } = req.params;
  updateElement(list, id, req.body);
  swapPositions(list, position, id);
  let sortedlist = updatePosition(list);

  res.send(sortedlist);
});

// make a route that download the fightersList.json file
app.get('/api/download/json', (req, res) => {
  res.download(fileName);
});

// make a route that download the fightersList.json file
app.get('/api/download/csv', (req, res) => {
  res.download('./fightersList.csv');
});

// recive a list and write it to the file
app.post('/api/upload/json', (req, res) => {
  const { list } = req.body;
  let sortedlist = updatePosition(list);
  writeFile(fileName, list);

  res.send(sortedlist);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
