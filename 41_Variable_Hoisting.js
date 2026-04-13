
console.log(a);

var a = 10;

// Output: ReferenceError: Cannot access 'a' before initialization

// Explanation:
// In JavaScript, variable declarations using 'let' and 'const' are hoisted to the top of their block scope, but they are not initialized until the code execution reaches the line where they are defined. This means that while the declaration of 'a' is hoisted, it is not initialized, and trying to access it before initialization results in a ReferenceError.