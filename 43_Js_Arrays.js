let fruits=["Apple","Banana","Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Accessing Elements

console.log(fruits[0]); // Output: "Apple"
console.log(fruits[1]); // Output: "Banana"
console.log(fruits[2]); // Output: "Cherry"

// Modifying Elements
fruits[1]="Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

//Array Methods 
fruits.push("Date"); // Adds "Date" to the end of the array
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry", "Date"]

fruits.pop(); // Removes the last element ("Date")
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

fruits.unshift("Pineapple"); // Adds "Pineapple" to the beginning of the array
console.log(fruits); // Output: ["Pineapple", "Apple", "Blueberry", "Cherry"]

fruits.shift(); // Removes the first element ("Pineapple")
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Length of the array
console.log(fruits.length); // Output: 3

//Iterating over the array
fruits.forEach(function(fruit){
    console.log(fruit);
});
// Output:
// "Apple"
// "Blueberry"
// "Cherry"

// Using map to create a new array with the lengths of each fruit name
const fruitsLengths=fruits.map(function(fruit){
    return fruit.length;
});
console.log(fruitsLengths); // Output: [5, 9, 6]

// Using filter to create a new array with fruits that have more than 5 characters

const longFruits=fruits.filter(function(fruit){
    return fruit.length>5;
});
console.log(longFruits); // Output: ["Blueberry", "Cherry"]