const prompt=require("prompt-sync")();

const number=parseFloat(prompt("Enter a number to find its factorial: "));

let factorial=1;

for(let i=1; i<=number; i++){
    factorial=factorial*i;
}

console.log(`The factorial of ${number} is ${factorial}`);
