import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

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

let argv = yargs(hideBin(process.argv))
  .command('add', 'Add a new note.', addOptions, addNote)
  .command('remove', 'Remove a note', removeNote)
  .command('list', 'List the notes', listNotes)
  .command('read', 'Read a note', readNote)
  .help('h')
  .alias('h', 'help')
  .parse()

function addNote(argv) {
  console.log('Hi there ' + argv.title + argv.body)
}

function removeNote() {
  console.log('Removing a note...')
}
function listNotes() {
  console.log('Listing the notes...')
}

function readNote() {
  console.log('Reading a note...')
}