const prompt = require('prompt-sync')();

const number=parseFloat(prompt("Enter a positive integer: "));

if(number<0){
    console.log("plz Enter Positive Number");
    process.exit(1);
}

let sum=0;

for(let i=1; i<=number; i++){
    sum=sum+i;
}

console.log(`The sum of first ${number} natural numbers is: ${sum}`)

