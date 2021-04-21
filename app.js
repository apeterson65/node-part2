const chalk = require('chalk');

const { demandOption } = require('yargs');
const yargs = require('yargs');
const { listNotes } = require('./notes');
const notes = require('./notes');


//custonm yargs message

yargs.version('1.1.0');

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //making the title manditory
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //making the title manditory
            type: 'string'
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
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler() {
        notes.listNotes();
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, //making the title manditory
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

//add, remove, read, list

//console.log(yargs.argv);
yargs.parse();