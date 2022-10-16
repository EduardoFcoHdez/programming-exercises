//Make an array of numbers that are doubles of the first array
/*function doubleNumbers(arr){
    // your code here
  }  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
*/

function doubleNumbers(numbers : Array<number>): Array<number>{
  const doubleNumbers = numbers.map((number, doubleNumber) => {
    return doubleNumber = number * 2
  })
  return doubleNumbers;
}
console.log('doubleNumbers',doubleNumbers([1,2,3,4])); 