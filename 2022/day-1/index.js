// Get input from txt file
const fs = require('fs')
const input = fs.readFileSync('./input.txt', {encoding: 'utf8'})

// Get individual elves meals
const elves = input.split('\n\n')

// Calculates total calories based on elves meals
function calcCalories(elf) {
  const calories = elf.split('\n')
  return parseInt(calories.reduce((acc, curr) => parseInt(acc) + parseInt(curr)))
}

// Calculates all elves total calories
const calories = elves.map(elf => calcCalories(elf))

// Sorts least to greatest
calories.sort((a, b) => a - b)

// Sums top three elves calories
const topThree = calories.slice(-3).reduce((acc, curr) => acc + curr)

// Logs required info
console.log('The elf with the most calories: ' + calories.at(-1));
console.log('The top three elves have this many calories: ' + topThree);