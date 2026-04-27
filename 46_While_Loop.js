// let i=1;

// while (i<=5) {
//     console.log(i);
//     i++;
// }

const prompt=require("prompt-sync")();

let password= "";

while(password !== "Admin123"){
    password= prompt("Enter Password...")
}

console.log("Access Granted");