const prompt= require('prompt-sync')();

const number=parseFloat(prompt("Enter a number:"));
let sum=0;
let temp=number;

while(temp>0){
    let digit=temp%10;
    sum+=Math.pow(digit,3);
    temp=Math.floor(temp/10);
}

if(sum==number){
    console.log("The number is an Armstrong Number");
}
else{
    console.log("The number is not an Armstrong Number");
}