const fs = require('fs')

let moveScore = 0

const determineMoveOutcome = (elfMove, myMove) => {
  if (elfMove === 'A') {
    if (myMove === 'X') {
      return 3 + 1
    } else if (myMove === 'Y') {
      return 6 + 2
    } else if (myMove === 'Z') {
      return 0 + 3
    }
  } else if (elfMove === 'B') {
    if (myMove === 'X') {
      return 0 + 1
    } else if (myMove === 'Y') {
      return 3 + 2
    } else if (myMove === 'Z') {
      return 6 + 3
    }
  } else if (elfMove === 'C') {
    if (myMove === 'X') {
      return 6 + 1
    } else if (myMove === 'Y') {
      return 0 + 2
    } else if (myMove === 'Z') {
      return 3 + 3
    }
  } else {
    throw new Error('Move not accounted for')
  }
}

const input = fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})
  .split('\n')
  .map(game => {
    const [elfMove, myMove] = game.split(' ')
    const score1 = determineMoveOutcome(elfMove, myMove)
    moveScore += score1
  })

console.log('Part 1: ' + moveScore);