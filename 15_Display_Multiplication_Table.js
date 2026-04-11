const prompt = require('prompt-sync')();

const number=parseFloat(prompt("Enter a number to display its multiplication table: "));

console.log(`The Multiplication Table of ${number} is:`);

for(let i=1; i<=10; i++){
    console.log(`${number} x ${i} = ${number*i}`);
}

