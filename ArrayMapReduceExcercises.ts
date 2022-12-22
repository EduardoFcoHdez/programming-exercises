const ages = [12, 46, 32, 64];

const mean = (ages.reduce((ageSum, age) => {
     ageSum += age;
    return ageSum;
})) / ages.length;

const agesMeanDifference = ages.map((value)=>{
    return Math.abs(mean - value);
});
const minimumAgeDifference =  agesMeanDifference.reduce((accumulator, value)=> {
 return accumulator = value < accumulator ? value: accumulator; 
})
const medium =  ages[agesMeanDifference.indexOf(minimumAgeDifference)];

console.log('medium:::', medium);