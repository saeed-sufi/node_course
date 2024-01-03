import chalk from 'chalk'
const log = console.log 

log(chalk.green("Success!"))
log(chalk.yellow.bgBlueBright.bold.inverse("Saeed, THE Programmer!"))
log(chalk.yellow.bgBlueBright.bold("Saeed, THE Programmer!"))

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));


log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);


const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));