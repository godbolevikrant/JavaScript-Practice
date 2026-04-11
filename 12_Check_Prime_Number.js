const prompt=require("prompt-sync")();

const number=parseFloat(prompt("Enter a Number"));
let isPrime;

if(number==1){
    console.log("1 is nither prime nor composite number");
}

else if(number>1){
    for(let i=2; i<=number/2; i++)
    {
        if(number%i==0){
            isPrime=false;
        }
    }

    if(isPrime){
        console.log(`${numebr} is a prime number`);
    }
    else{
        console.log(`${number} is not a prime number`);
    }
}

else{
    console.log("The Number is Not a prime number");
}