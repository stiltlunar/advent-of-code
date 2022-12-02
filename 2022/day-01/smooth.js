const fs = require('fs')

const calories = fs.readFileSync('./input.txt', {encoding: 'utf8'})
  .split('\n\n')
  .map(elf => {
    return elf.split('\n').map(meal => parseInt(meal)).reduce((acc, curr) => acc + curr)
  })
  .sort((a, b) => a-b)

const max = calories.at(-1)
const topThree = calories.slice(-3).reduce((acc, curr) => acc + curr)

console.log('The elf with the most calories: ' + max);
console.log('The top three elves have this many calories: ' + topThree);