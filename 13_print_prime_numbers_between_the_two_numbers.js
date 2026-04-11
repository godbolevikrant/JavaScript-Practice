const prompt=require("prompt-sync")();

const lowerNumber=parseFloat(prompt("Enter First Number"));

const higherNumber=parseFloat(prompt("Enter second Number"));

console.log(`The Prime Numbers ${lowerNumber} between ${higherNumber} is=`);

for(let i=lowerNumber; i<=higherNumber; i++ ){

    let flag=0;
    for(let j=2; j < i; j++ ){
        if(i % j==0){
            flag=1;
            break;
        }
    }

    if(i>1 && flag==0){
        console.log(i);
    }

}


