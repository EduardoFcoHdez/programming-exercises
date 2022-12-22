//Make an array of numbers that are doubles of the first array
function doubleNumbers(numbers : Array<number>): Array<number>{
  const doubleNumbers = numbers.map((number) => {
    return number * 2
  })
  return doubleNumbers;
}

console.log('doubleNumbers',doubleNumbers([1,2,3,4])); 