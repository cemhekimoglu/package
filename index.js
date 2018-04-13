var chalk = require("chalk");

var message = chalk.redBright("Hello ") + chalk.bgCyan("World");
var messageTwo = chalk.bold.blue("Cem ") + chalk.greenBright("Hekimoglu")
console.log(message);
console.log(messageTwo);