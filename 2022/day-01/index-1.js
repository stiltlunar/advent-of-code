const fs = require('fs')

const input = fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})

const elves = input.split('\n\n')

function calcCalories(elf) {
  const calories = elf.split('\n')
  return parseInt(calories.reduce((acc, curr) => parseInt(acc) + parseInt(curr)))
}

const calories = elves.map(elf => calcCalories(elf))

calories.sort((a, b) => a - b)

console.log('Part 1: ' + calories.at(-1));