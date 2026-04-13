
function displayMessage() {
    let message = "Hello, World!"; // This variable is only accessible within this function
    
    function displayInnerMessage() {
        console.log(message); // This inner function can access the 'message' variable from the outer function
    }
    
    displayInnerMessage();
}
displayMessage();
// Output: Hello, World!