const fs = require('fs');


const getFile = (filename) => {
    let file = fs.readFileSync(filename, 'utf8');
  
    return JSON.parse(file);
  };

const addPos = (file) => {
    let pos = 1;
    const newfighters = file.map((fighter) => {
      fighter.position = pos++;
      return fighter;
    });
    
        fs.writeFile('./fightersList.json', JSON.stringify(newfighters, null, 2), (err) => {
          if (err) throw err;
          console.log('The file has been saved!');
        });

  };

  addPos(getFile('./fightersList.json'))