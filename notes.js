const fs = require('fs');
const chalk = require('chalk');



const listNotes = () => {
    console.log(chalk.inverse("Your Notes:"))
    console.log(JSON.stringify(loadNotes(), null, 2))
}

const addNote = (title, body) => {
    const notes = loadNotes()

    if (notes.find((note) => note.title === title)) return chalk.red.inverse.bold("Note title taken");

    notes.push({
        title,
        body
    })
    saveNotes(notes);
    return chalk.green.bold("saved")

}

const removeNote = (title) => {
    const notes = loadNotes();

    newNotes = notes.filter((note) => note.title !== title)
    if (newNotes.length === notes.length) return chalk.red.inverse.bold(`No note found with title: ${title}`)
    else {
        saveNotes(newNotes);
        return chalk.green.bold(`Note with title ${title} removed`);
    };
}

const getNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) return chalk.inverse('Note:\n') + JSON.stringify(note, null, 2);
    else return chalk.red.inverse("No note found with title:")+ " " + title;
}





const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes,null, '\t'));
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString());
    } catch (e) {
        return []
    }
}


module.exports = {
    listNotes,
    addNote,
    removeNote,
    getNote
}