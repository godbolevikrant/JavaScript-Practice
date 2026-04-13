function sum(...numbers){
    let total = 0;
    for (let n of numbers) {
        total= total + n;
    }
    return total;
}

console.log(sum(1,2,3)); // Output: 6
console.log(sum(10,20,30,40)); // Output: 100