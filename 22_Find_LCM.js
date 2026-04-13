const prompt= require('prompt-sync')();

let lcm;
const number1=parseFloat(prompt("Enter the first number:"));
const number2=parseFloat(prompt("Enter the second number:"));

for (let i=1; i<=number1*number2; i++) {
    if (i % number1 === 0 && i % number2 === 0) {
        lcm = i;
        break;
    }
}

console.log(`The LCM of ${number1} and ${number2} is ${lcm}`);