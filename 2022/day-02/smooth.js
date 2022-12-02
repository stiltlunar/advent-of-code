const fs = require('fs')

let moveScore = 0
let outScore = 0

const scores = {
  'A X': [1 + 3, 0 + 3],
  'A Y': [2 + 6, 3 + 1],
  'A Z': [3 + 0, 6 + 2],
  'B X': [1 + 0, 0 + 1],
  'B Y': [2 + 3, 3 + 2],
  'B Z': [3 + 6, 6 + 3],
  'C X': [1 + 6, 0 + 2],
  'C Y': [2 + 0, 3 + 3],
  'C Z': [3 + 3, 6 + 1]
}

fs.readFileSync('./input.txt', {encoding: 'utf8'})
  .split('\n')
  .map(game => {
    moveScore += scores[game][0]
    outScore += scores[game][1]
  })

console.log('Part 1: ' + moveScore);
console.log('Part 2: ' + outScore);