const prompt= require('prompt-sync')();

const a=parseFloat(prompt("Enter first number: "));
const b=parseFloat(prompt("Enter second number: "));
const c=parseFloat(prompt("Enter third number: "));

const result1 = a%10;
const result2 = b%10;
const result3 = c%10;

if(result1==result2 && result2==result3){
    console.log("All three numbers have the same last digit.");
}
else{
    console.log("The numbers do not have the same last digit.");
}
