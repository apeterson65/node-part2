const { default: chalk } = require('chalk');
const fs = require('fs');


const getNotes = () => {
    return ("Your notes...");
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return [];
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {

    const notes = loadNotes();
    //const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);
    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title


    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgGreenBright('New note added'));
    } else {
        console.log(chalk.bgRedBright('Note title taken'))
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    notesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.bgRed('Note not found!'));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue(getNotes()));
    notes.forEach((note) => {
        console.log(chalk.bgBlue.yellow(note.title));
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title);
    if (findNote) {
        console.log(chalk.blue(getNotes()));
        console.log(chalk.inverse(findNote.title))
        console.log(findNote.body)
    } else {
        console.log(chalk.red.inverse('Note not found'));

    }


}
module.exports = {

    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}