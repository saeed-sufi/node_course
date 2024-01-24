import { addNote, removeNote, listNotes, readNote } from './notes.js'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv))

const addOptions = {
  title: {
    describe: 'Note title',
    demandOption: true,
    type: 'string'
  },
  body: {
    describe: 'Add your content',
    demandOption: true,
    type: 'string'
  }
}

const removeOptions = {
  title: {
    describe: 'Note title',
    demandOption: true,
    type: 'string'
  }
}


const readOptions = {
  title: {
    describe: 'Note title',
    demandOption: true,
    type: 'string'
  }
}

argv.command('add', 'Add a new note', addOptions, addNote)
  .command(['remove','rm'], 'Remove a new note', removeOptions, removeNote)
  .command('read', 'Read a note', readOptions, readNote)
  .command(['list', 'ls'], 'List the note titles', listNotes)
  .help()
  .parse()
