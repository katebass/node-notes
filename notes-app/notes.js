const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
    console.log(chalk.blue('Your notes:'));
    notes = loadNotes();

    notes.forEach(note => {
        console.log(chalk.green(note.title));
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const requiredNote = notes.find((note) => note.title === title);

    if (requiredNote) {
        console.log('Found note info: ');
        console.log(chalk.inverse('Note title: ' + requiredNote.title));
        console.log(chalk.inverse('Note body: ' + requiredNote.body));
    } else {
        console.log('No notes was found by this title');
    }
}

// Adding a new note
const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) =>  note.title === title); // filter notes to find duplications
    const duplicateNote = notes.find((note) =>  note.title === title);
 
    if (!duplicateNote) { // title is not duplicated => allowed to be added
        notes.push({
            title: title,
            body: body
       });

       saveNotes(notes); // updating JSON file
       console.log(chalk.bgGreen('Your note was added!'));
    } else {
        console.log(chalk.bgYellowBright('Such note title already taken!'));
    }
}

const saveNotes = (notes) => {
    notesString = JSON.stringify(notes); // convert JSON to string
    fs.writeFileSync('notes.json', notesString); // rewrite the file or create new
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch (e) {
        return [];
    }    
}

// Removing a note by title
const removeNote = (title) => {
    const notes = loadNotes();

    const updatedNotes = notes.filter((note) => note.title !== title);

    saveNotes(updatedNotes);

    // if updatedNotes less than notes array - required element was removed
    if (notes.length > updatedNotes.length) {
        console.log(chalk.bgGreen('Your note with title "' + title + '" was removed!'));
    } else {
        console.log(chalk.bgYellowBright('No note with such title...')); // no occurences was found
    }

}

module.exports = {
    listNotes: listNotes,
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
}