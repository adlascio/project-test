var chalk = require("chalk");

var message = chalk.underline(chalk.bgWhite(chalk.red("Hello, ")) + chalk.bgRed("World!"));
console.log(message);