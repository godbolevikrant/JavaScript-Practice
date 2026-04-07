const prompt=require("prompt-sync")();

const kilometers=parseFloat(prompt("Enter the distance in KM:"));

const miles=0.621371*kilometers;

console.log(`The Miles is ${miles}`);