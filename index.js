var chalk = require("chalk");

var message = chalk.redBright("Hello ") + chalk.bgCyan("World");
console.log(message);