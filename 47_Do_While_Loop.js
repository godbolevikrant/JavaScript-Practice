const prompt= require("prompt-sync")();

let password;

do{
    password=prompt("Enter Password...!");
}
while(password !== "Admin123");

console.log("Access Granted..!");
