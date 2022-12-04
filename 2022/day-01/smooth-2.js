const fs = require('fs')

const calories = fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})
  .split('\n\n')
  .map(elf => {
    return elf.split('\n').map(meal => parseInt(meal)).reduce((acc, curr) => acc + curr)
  })
  .sort((a, b) => a-b)

const answer = calories.slice(-3).reduce((acc, curr) => acc + curr)

console.log('Part 2: ' + answer);