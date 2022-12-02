const fs = require('fs')

let moveScore = 0
let outScore = 0

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

const input = fs.readFileSync('./input.txt', {encoding: 'utf8'})
  .split('\n')
  .map(game => {
    const [elfMove, myMove] = game.split(' ')
    const score1 = determineMoveOutcome(elfMove, myMove)
    moveScore += score1
    const score2 = determineOutcome(elfMove, myMove)
    outScore += score2
  })

console.log('Part 1: ' + moveScore);
console.log('Part 2: ' + outScore);