import chalk from 'chalk'
import notes from './notes.js'
import fs from 'fs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).usage('Count the lines in a file.\nUsage: $0')
    .demand('f')
    .alias('f', 'file')
    .describe('f', 'Load a file').argv

if (argv.ships > 3) {
    console.log('Plunder more riffiwobbles!');
} else {
    console.log('Retreat from the xupptumblers!');
}

console.log(argv)
console.log('(%d,%d)', argv.x, argv.y)
console.log(argv._)




console.log(argv.file)
var s = fs.createReadStream(argv.file);

var lines = 0;
s.on('data', function (buf) {
    lines += buf.toString().match(/\n/g).length;
});

s.on('end', function () {
    console.log(lines);
});