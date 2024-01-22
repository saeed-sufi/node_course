import fs from 'fs'
import chalk from 'chalk';

export const addNote = (argv) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(note => {
    return note.title === argv.title
  });

  if (duplicateNotes.length === 0) {
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

export const removeNote = (argv) => {
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

export const listNotes = () => {
  const notes = loadNotes()
  notes.map((note) => console.log(note.title))
}

export const readNote = (argv) => {
  const note = {
    title: argv.title,
    body: argv.body
  }

  const noteJSON = JSON.stringify(note)
  fs.writeFileSync('notes.json', noteJSON)
}


