const fs = require('fs');

const book = {
    title: 'Don Quijote',
    author: 'Miguel de Cervantes',
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData.title);

// write json info to the file
fs.writeFileSync('1-json.json', bookJSON);
// read json info from the file
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
console.log(dataJSON);

const data = JSON.parse(dataJSON);
console.log(data.author);
data.author = 'Kate';
console.log(data.author);