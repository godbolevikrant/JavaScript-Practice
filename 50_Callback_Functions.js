const prompt=require("prompt-sync")();

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// function processUserInput(callback){
//     const name=prompt("Enter Your Name:");
//     callback(name);
// }
// processUserInput(greet);


function add(a,b){
    return a+b;
}

function processUserInput(callback){
    const num1=parseInt(prompt("Enter First Number:"));
    const num2=parseInt(prompt("Enter Second Number:"));
    const result=callback(num1,num2);
    console.log("Result: "+result);
}
processUserInput(add);