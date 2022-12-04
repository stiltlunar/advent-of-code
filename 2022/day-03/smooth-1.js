const fs = require('fs')

let answer = 0

fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})
  .split('\n')
  .map(items => {
    let half = items.length / 2
    let same = items.slice(half, items.length + 1).split('').find(item => items.slice(0, half).includes(item))
    same.charCodeAt(0) < 97 ? answer += same.charCodeAt(0) - 38 : answer += same.charCodeAt(0) - 96
  })

console.log('Part 1: ' + answer);