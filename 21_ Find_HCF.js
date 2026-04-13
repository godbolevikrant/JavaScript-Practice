const prompt= require('prompt-sync')();

let hcf;

const number1=parseFloat(prompt("Enter the first number:"));
const number2=parseFloat(prompt("Enter the second number:"));

for (let i=1; i<number1 && i<number2; i++) {
    if (number1 % i === 0 && number2 % i === 0) {
        hcf = i;
    }
}

console.log(`The HCF of ${number1} and ${number2} is ${hcf}`);