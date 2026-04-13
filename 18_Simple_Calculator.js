const prompt= require('prompt-sync')();

const number1=parseFloat(prompt("Enter the First Number"));
const number2=parseFloat(prompt("Enter the Second Number"));

const opera= prompt("Enter the Operator (+, -, *, /): ");

let result;

if(opera=='+'){
    result=number1+number2;
}
else if(opera=='-'){
    result=number1-number2;
}
else if(opera=='*'){
    result=number1*number2;
}
else if(opera=='/'){
    if(number2!=0){
        result=number1/number2;
    }
    else{
        console.log("Error: Division by zero is not allowed.");
        process.exit(1);
    }
}
else{
    console.log("Invalid Operator");
    process.exit(1);
}

console.log(`The result of ${number1} ${opera} ${number2} is: ${result}`);  


