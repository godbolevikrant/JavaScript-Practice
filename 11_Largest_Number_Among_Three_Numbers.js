const prompt=require("prompt-sync")();

const num1=parseFloat(prompt("Enter First Number"));
const num2=parseFloat(prompt("Enter Second Number"));
const num3=parseFloat(prompt("Enter Third Number"));


//let largest;

// if(num1>=num2&&num1>=num3){
//     largest=num1;
// }

// else if(num2>=num1&&num2>=num3)
// {
//     largest=num2;
// }

// else{
//     largest=num3;
//}

//const largest=Math.max(num1,num2,num3);

function findLargest(){
    const largest=Math.max(num1,num2,num3);
    console.log("The largest number is="+largest);
}

findLargest();