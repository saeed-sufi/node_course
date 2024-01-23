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

switch (process.argv[2]) {
  case 'add':
    argv.command('add', 'Add a new note', addOptions, addNote).parse()
    break;
  case 'remove':
    argv.command('remove', 'Remove a new note', removeOptions, removeNote).parse()
    break;
  case 'read':
    argv.command('read', 'Read a note', readOptions, readNote).parse()
    break
  case 'list':
    argv.command('list', 'List the note titles', listNotes).parse()
    break
  default:
    console.log('Command not known!')
    break;
}