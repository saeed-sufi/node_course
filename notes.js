import fs from 'fs'
import chalk from 'chalk';

const addNote = (argv) => {
  const notes = loadNotes()
  const duplicateNote = notes.find(note => note.title === argv.title)
  if (!duplicateNote) {
    notes.push({
      title: argv.title,
      body: argv.body
    })
    saveNote(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red('Note title taken.'))
  }
}

const saveNote = (notes) => {
  const noteJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', noteJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const removeNote = (argv) => {
  const notes = loadNotes()
  const remainingNotes = notes.filter(note => {
    return note.title !== argv.title
  })


  if (remainingNotes.length != notes.length) {
    console.log(chalk.green.inverse(argv.title + ' is removed.'))
    saveNote(remainingNotes)
  } else {
    console.log(chalk.red.inverse("No note with title " + argv.title + " exists."))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  notes.map((note) => console.log(note.title))
}

const readNote = (argv) => {
  const argNote = {
    title: argv.title,
    body: argv.body
  }
  const notes = loadNotes()
  const n = notes.find(note => argNote.title === note.title)
  n ? console.log(n.body) : console.log(chalk.red(`Note with title ${argNote.title} not found.`))
}

export { addNote, removeNote, listNotes, readNote }

