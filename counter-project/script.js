// Get value from localStorage or default = 0
let count = localStorage.getItem("counter") 
    ? parseInt(localStorage.getItem("counter")) 
    : 0;

const countDisplay = document.getElementById("count");

// Show initial value
countDisplay.innerText = count;

// Increment
function increment() {
    count++;
    updateCounter();
}

// Decrement
function decrement() {
    count--;
    updateCounter();
}

// Reset
function reset() {
    count = 0;
    updateCounter();
}

// Update UI + localStorage
function updateCounter() {
    countDisplay.innerText = count;
    localStorage.setItem("counter", count);
}