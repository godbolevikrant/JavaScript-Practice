const prompt=require("prompt-sync")();

const num=parseFloat(prompt("Enter a Number:"));
    
if(num>0){
    console.log("Number is Positive");
}
else if(num<0){
    console.log("Number is Negative");
}
else{
    console.log("Number is Zero");  
}