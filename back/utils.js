const fs = require('fs');

// return json file
const getFile = (filename) => {
  let file = fs.readFileSync(filename, 'utf8');

  return JSON.parse(file);
};

const addPos = (file) => {
  let pos = 0;
  const newfighters = file.map((fighter) => {
    fighter.position = pos++;
    return fighter;
  });
  return newfighters;
};

//sort by position
const sortByPosition = (array) => {
  const sorted = array.sort((a, b) => {
    return a.position - b.position;
  });
  return sorted;
};

//swap posotions bases on index and udpate position
const swapPositions = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
  array[a].position = a;
  array[b].position = b;
};

//remove a element from array based on index
const removeElement = (array, index) => {
  array.splice(index, 1);
};

//write to json file
const writeFile = (fileName, list) => {
  fs.writeFile(fileName, JSON.stringify(list, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

// insert new element to array at position
const insertElement = (array, index, element) => {
  array.splice(index, 0, element);
};

// Update position according to index
const updatePosition = (array) => {
  return array.map((elem, index) => {
    elem.position = index;
    return elem;
  });
};

// move an element inside the array to a new position
const moveElement = (array, old_index, new_index) => {
  const element = array.splice(old_index, 1)[0];
  array.splice(new_index, 0, element);
};

// update object in array at position
const updateElement = (array, index, element) => {
  let newobj = { ...array[index], ...element };
  array[index] = newobj;
};

module.exports = {
  swapPositions,
  removeElement,
  getFile,
  writeFile,
  sortByPosition,
  addPos,
  insertElement,
  updatePosition,
  updateElement,
  moveElement,
};
