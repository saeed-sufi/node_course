import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

let argv = yargs(hideBin(process.argv))
    .command('add', 'Add a new note.', () => {
        console.log('Hi there')
    })
    .command('remove', 'Remove a note', () => {
        console.log('Removing a note...')
    })
    .command('list', 'List the notes', listNotes)
    .command('read', 'Read a note', readNote)
    .help('h')
    .alias('h', 'help')
    .parse()

function listNotes() {
    console.log('Listing the notes...')
}

function readNote() {
    console.log('Reading a note...')
}