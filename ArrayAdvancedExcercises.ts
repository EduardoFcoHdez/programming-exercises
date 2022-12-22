
/*
Given an array of integers, return the indices of two numbers such that they add up to the target
Ex.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

ex. 
target= 18 
output:
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

function obtainIndexesFromSum(numbers: number[], target: number):number[]{
  let indexes: number[]=[] ;

  for(let i = 0; i<= numbers.length; i++){  
  	numbers.forEach((number,j)=>{
      if(numbers[i] + numbers[j+1] === target){
        indexes.push(i);
        indexes.push(j);
        return indexes;
    }
    });
  }
  return indexes;
}


let numbers = [2,7,11,15];
const obtainedIndexes = obtainIndexesFromSum(numbers, 17);
console.log('obtainedIndexes', obtainedIndexes); 