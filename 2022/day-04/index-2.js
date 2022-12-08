const fs = require('fs')

let count = 0

const input = fs.readFileSync('./input-prod.txt', {encoding: 'utf8'})
  .split('\n')
  .map(pair => {
    const [first, second] = pair.split(',')
    const elf1 = first.split('-')
    const elf2 = second.split('-')
    if (parseInt(elf1[0]) <= parseInt(elf2[0]) && parseInt(elf1[1]) >= parseInt(elf2[1])) {
      count += 1
    } else if (parseInt(elf2[0]) <= parseInt(elf1[0]) && parseInt(elf2[1]) >= parseInt(elf1[1])) {
      count += 1
    } else if (parseInt(elf1[0]) <= parseInt(elf2[1]) && parseInt(elf1[1]) >= parseInt(elf2[0])) {
      count += 1
    } else if (parseInt(elf2[0]) <= parseInt(elf1[1]) && parseInt(elf2[1]) >= parseInt(elf1[0])) {
      count += 1
    }
  })

console.log('Part 1: ' + count);