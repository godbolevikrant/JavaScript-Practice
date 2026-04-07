const prompt=require("prompt-sync")();

const celsius=parseFloat(prompt("Enter the temprature in celsius:"));

const fahrenheit= (celsius*1.8)+32;

console.log(`The Fahrenheit is ${fahrenheit}`);

