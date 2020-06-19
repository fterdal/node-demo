const fs = require('fs')

console.log('Starting Async Stuff')

fs.readFile('./bad-spaghetti.txt', (err, data) => {
  if (err) console.log('OH NO!! 🔥')
  else console.log(data.toString());
})

console.log('Did it happen yet?')
