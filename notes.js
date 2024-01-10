import fs from 'fs'

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
    console.log('New note added!')
  } else {
    console.log('Note title taken.')
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
  const note = {
    title: argv.title,
    body: argv.body
  }

  const noteJSON = JSON.stringify(note)
  fs.writeFileSync('notes.json', noteJSON)
}
export const listNotes = (argv) => {
  const note = {
    title: argv.title,
    body: argv.body
  }

  const noteJSON = JSON.stringify(note)
  fs.writeFileSync('notes.json', noteJSON)
}
export const readNote = (argv) => {
  const note = {
    title: argv.title,
    body: argv.body
  }

  const noteJSON = JSON.stringify(note)
  fs.writeFileSync('notes.json', noteJSON)
}


