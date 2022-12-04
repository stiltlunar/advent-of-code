const fs = require('fs')

let ansOne = 0
let ansTwo = 0

fs.readFileSync('./input.txt', {encoding: 'utf8'})
  .split('\n')
  .map(items => {
    let half = items.length / 2
    let same = items.slice(half, items.length + 1).split('').find(item => items.slice(0, half).includes(item))
    same.charCodeAt(0) < 97 ? ansOne += same.charCodeAt(0) - 38 : ansOne += same.charCodeAt(0) - 96
  })

const elves = fs.readFileSync('./input.txt', {encoding: 'utf8'})
  .split('\n')

let start = 0
let groups = []

while (start < elves.length) {
  groups.push(elves.slice(start, start + 3))
  start += 3
}

groups.forEach(group => {
  let same = group[2].split('').find(item => group[0].includes(item) && group[1].includes(item))
  same.charCodeAt(0) < 97 ? ansTwo += same.charCodeAt(0) - 38 : ansTwo += same.charCodeAt(0) - 96
})

console.log('Part 1: ' + ansOne);
console.log('Part 2: ' + ansTwo);