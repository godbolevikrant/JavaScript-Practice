const prompt=require("prompt-sync")();

let a=prompt("Enter the value of a:");
let b=prompt("Enter the value of b:");

let temp=a;
a=b;
b=temp;

console.log("After Swapping:");

console.log("The value of a is="+a);
console.log("The value of b is="+b);