const fs = require('fs')

let answer = 0

const elves = fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})
  .split('\n')

let start = 0
let groups = []

while (start < elves.length) {
  groups.push(elves.slice(start, start + 3))
  start += 3
}

groups.forEach(group => {
  let same = group[2].split('').find(item => group[0].includes(item) && group[1].includes(item))
  same.charCodeAt(0) < 97 ? answer += same.charCodeAt(0) - 38 : answer += same.charCodeAt(0) - 96
})

console.log('Part 2: ' + answer);