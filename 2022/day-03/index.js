const fs = require('fs')

let ansOne = 0
let ansTwo = 0

const values = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
  'A': 27,
  'B': 28,
  'C': 29,
  'D': 30,
  'E': 31,
  'F': 32,
  'G': 33,
  'H': 34,
  'I': 35,
  'J': 36,
  'K': 37,
  'L': 38,
  'M': 39,
  'N': 40,
  'O': 41,
  'P': 42,
  'Q': 43,
  'R': 44,
  'S': 45,
  'T': 46,
  'U': 47,
  'V': 48,
  'W': 49,
  'X': 50,
  'Y': 51,
  'Z': 52
}

fs.readFileSync('./input.txt', {encoding: 'utf8'})
  .split('\n')
  .map(items => {
    let half = items.length / 2
    let first = items.slice(0, half).split('')
    let second = items.slice(half, items.length + 1).split('')
    let sameStuff = ''
    first.forEach(char => {
      second.forEach(char2 => {
        if (char === char2) {
          sameStuff = char
        }
      })
    })
    ansOne += values[sameStuff]
  })

const elves = fs.readFileSync('./input.txt', {encoding: 'utf8'})
  .split('\n')

let acc = []
let groups = []

elves.forEach(elf => {
  acc.push(elf)
  if (acc.length === 3) {
    groups.push(acc)
    acc = []
  }
})

groups.forEach(group => {
  let first = group[0].split('')
  let second = group[1].split('')
  let third = group [2].split('')
  let sameStuff = ''
  first.forEach(char => {
    second.forEach(char2 => {
      third.forEach(char3 => {
        if (char === char2 && char2 === char3) {
          sameStuff = char
        }
      })
    })
  })
  console.log(sameStuff);
  ansTwo += values[sameStuff]
})

console.log(groups);

console.log('Part 1: ' + ansOne);
console.log('Part 2: ' + ansTwo);