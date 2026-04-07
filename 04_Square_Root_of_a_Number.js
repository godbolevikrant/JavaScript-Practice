const prompt=require("prompt-sync")();

const number=prompt("Enter a number to find its sqr root:");
const result=Math.sqrt(number);
console.log("The sqr of Number is="+result);