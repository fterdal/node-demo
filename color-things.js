const { ingredients } = require('./server/ingredients');

const { cyan, red, yellow } = require('chalk');

console.log(red('OH NO its bäd spaghetti 🍝'))

setTimeout(() => {
  console.log(yellow(ingredients))
}, 1000)
