const fs = require('fs')

let answer = 0

const scores = {
  'A X': 0 + 3,
  'A Y': 3 + 1,
  'A Z': 6 + 2,
  'B X': 0 + 1,
  'B Y': 3 + 2,
  'B Z': 6 + 3,
  'C X': 0 + 2,
  'C Y': 3 + 3,
  'C Z': 6 + 1
}

fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})
  .split('\n')
  .map(game => {
    answer += scores[game]
  })

console.log('Part 2: ' + answer);