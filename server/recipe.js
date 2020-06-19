const { randomCrap, dishName } = require('./ingredients')

console.log(randomCrap)

console.log(`In order to make ${dishName}:`)
randomCrap.forEach((ingredient) => {
  console.log(`Add some ${ingredient}`)
})
