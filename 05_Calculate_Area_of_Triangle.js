const prompt=require("prompt-sync")();

const base=parseFloat(prompt("Enter the base of the triangle:"));
const height=parseFloat(prompt("Enter the height of the triangle:"));

const area=base*height/2;

console.log("The area of triangle is="+area);