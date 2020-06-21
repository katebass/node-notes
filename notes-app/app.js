#!/usr/bin/env node

const yargs = require('yargs');
const notes = require('./notes.js');

// Create 'add' command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: { // command argument
            describe: 'Note title',
            demandOption: true, // required
            type: 'string' // define argument datatype
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create 'remove' command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'The title on note which will be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create 'list' command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes();
    }
});

// Create 'read' command
yargs.command({
    command: 'read',
    describe: 'Read specific note by title',
    builder: {
        title: {
            describe: 'Note\'s title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.demandCommand().parse();
// console.log(yargs.argv);


/* -------- My practice -------- */
/* import files of packeges */
// const add = require('./utils.js')
// const fs = require('fs')

/* write info to the file */
// fs.writeFileSync('notes.txt', 'I will work in IBM')
// fs.appendFileSync('notes.txt', '\nAll my wishes will come true!')

/* using function imported from another file  */
// const sum = add(2, 2)
// console.log(sum)

/* validetr package */
// const validator = require('validator')
// console.log(validator.isEmail('am.ru'))

/* importing data from another file when  in package.json "type": "module" */
// import math, {add} from "./utils.js";
// console.log(math.add(1, 5))
// console.log(add(1, 5))

/* chalk package */
// import chalk from 'chalk'
// console.log( chalk.bgBlue.bold.inverse.green('SUCCESS YESS'));

/* accessing terminal parameters */
// const action = process.argv[2];
// if (action === 'add') { // node app.js add --title="Here's my title"
//     console.log('Adding a note...');
// } else if (action === 'remove') {
//     console.log('Removing a note...');
// }

/* yargs.argv and process.argv difference */
// console.log(process.argv);
// const yargs = require('yargs');
// yargs.version('1.1.111'); // node app.js --version
// console.log(yargs.argv);
