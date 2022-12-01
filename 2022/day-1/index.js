const fs = require('fs')

const input = fs.readFileSync('./input.txt', {encoding: 'utf8'})

const elves = input.split('\n\n')

function calcCalories(elf) {
  const calories = elf.split('\n')
  return calories.reduce((acc, curr) => parseInt(acc) + parseInt(curr))
}

const calories = elves.map(elf => parseInt(calcCalories(elf)))
calories.sort((a, b) => {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
})

console.log(calories[calories.length - 1]);