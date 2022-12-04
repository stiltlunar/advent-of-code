const fs = require('fs')

let answer = 0

const scores = {
  'A X': 1 + 3,
  'A Y': 2 + 6,
  'A Z': 3 + 0,
  'B X': 1 + 0,
  'B Y': 2 + 3,
  'B Z': 3 + 6,
  'C X': 1 + 6,
  'C Y': 2 + 0,
  'C Z': 3 + 3,
}

fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})
  .split('\n')
  .map(game => {
    answer += scores[game]
  })

console.log('Part 1: ' + answer);