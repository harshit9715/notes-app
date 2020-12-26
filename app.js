const { default: validator } = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const {listNotes, addNote, removeNote, getNote} = require('./notes')

// create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Details of the note.',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(addNote(argv.title, argv.body))
    }
})

// remove add command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(removeNote(argv.title));
    }
})

// List command

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        listNotes();
    }
})

// Read notes command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(getNote(argv.title));
    }
})

// add, remove, list, read

yargs.parse()