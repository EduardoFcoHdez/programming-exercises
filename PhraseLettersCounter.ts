//Count the number Uppercase, lower case and special characters

let text:string = 'Eduardo Francisco';
let upperCaseCount = 0;
let lowerCaseCount = 0;
for (let index = 0; index < text.length; index++) {
    if(text[index]>='a' && text[index]<='z'){
        lowerCaseCount++;        
    } 
    if(text[index]>='A' && text[index]<='Z'){
        upperCaseCount++;
    }    
}

console.log('lowerCaseCount', lowerCaseCount);
console.log('upperCaseCount', upperCaseCount);