const fs = require('fs')

let outScore = 0

const determineOutcome = (elfMove, myMove) => {
  if (myMove === 'X') {
    if (elfMove === 'A') {
      return 0 + 3
    } else if (elfMove === 'B') {
      return 0 + 1
    } else if (elfMove === 'C') {
      return 0 + 2
    }
  } else if (myMove === 'Y') {
    if (elfMove === 'A') {
      return 3 + 1
    } else if (elfMove === 'B') {
      return 3 + 2
    } else if (elfMove === 'C') {
      return 3 + 3
    }
  } else if (myMove === 'Z') {
    if (elfMove === 'A') {
      return 6 + 2
    } else if (elfMove === 'B') {
      return 6 + 3
    } else if (elfMove === 'C') {
      return 6 + 1
    }
  }
}

const input = fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})
  .split('\n')
  .map(game => {
    const [elfMove, myMove] = game.split(' ')
    const score2 = determineOutcome(elfMove, myMove)
    outScore += score2
  })

console.log('Part 2: ' + outScore);