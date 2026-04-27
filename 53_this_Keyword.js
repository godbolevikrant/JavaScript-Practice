let person={
    name: "Vikrant",
    greet: function() {
        console.log("Hello, " + this.name); // 'this' refers to the person object in regular functions
    }
};
person.greet(); // Output: Hello, Vikrant
// To fix this, we can use a regular function instead of an arrow function