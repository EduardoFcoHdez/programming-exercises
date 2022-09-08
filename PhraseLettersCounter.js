//Count the number Uppercase, lower case and special characters
var text = 'Eduardo Francisco';
var upperCaseCount = 0;
var lowerCaseCount = 0;
for (var index = 0; index < text.length; index++) {
    if (text[index] >= 'a' && text[index] <= 'z') {
        lowerCaseCount++;
    }
    if (text[index] >= 'A' && text[index] <= 'Z') {
        upperCaseCount++;
    }
}
console.log('lowerCaseCount', lowerCaseCount);
console.log('upperCaseCount', upperCaseCount);
