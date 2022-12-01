// Get input from txt file
const fs = require('fs')
const input = fs.readFileSync('./input.txt', {encoding: 'utf8'})

// Get individual elves meals
const elves = input.split('\n\n')

// Calculates total calories based on elves meals
// TODO: fix where single meal returns string instead of number
function calcCalories(elf) {
  const calories = elf.split('\n')
  return calories.reduce((acc, curr) => parseInt(acc) + parseInt(curr))
}

// Calculates all elves total calories
const calories = elves.map(elf => parseInt(calcCalories(elf)))

// Sorts greatest to least
// TODO: Check efficiency
calories.sort((a, b) => {
  if (a > b) {
    return -1
  }
  if (a < b) {
    return 1
  }
  return 0
})

// Sums top three elves calories
const topThree = calories[0] + calories[1] + calories[2]

// Logs required info
console.log('The elf with the mostest has this many calories: ' + calories[0]);
console.log('The top three elves have this many calories: ' + topThree);