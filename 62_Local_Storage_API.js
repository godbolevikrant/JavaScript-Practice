const { LocalStorage } = require('node-localstorage');

// create localStorage instance
const localStorage = new LocalStorage('./scratch');

let user = {
    name: "Vikrant",
    age: 30
};

// Store data
localStorage.setItem("user", JSON.stringify(user));

// Retrieve data
const storedUser = localStorage.getItem("user");

if (storedUser) {
    const userObj = JSON.parse(storedUser);
    console.log(userObj.name); // Vikrant
    console.log(userObj.age);  // 30
} else {
    console.log("No user data found in localStorage.");
}