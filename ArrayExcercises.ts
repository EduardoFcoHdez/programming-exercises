const array = [10, 12, 18, 20, 21, 30, 35, 90, 100];
const adultArray = array.filter(number =>  number > 18);
const youngArray = array.slice(2);
const oldArray = array.find(number => number >= 100)
const yearsLeftToBeOldArray = array.map(number => 100 - number);

const yearsSum = array.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
});

console.log('yearsSum', yearsSum); 