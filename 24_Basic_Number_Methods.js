
const number= 123.456789;

console.log(number.toFixed(2)); // 123.46
console.log(number.toExponential(3)); // 1.235e+2
console.log(number.toPrecision(4)); // 123.5
console.log(number.toString()); // "123.456789"
console.log(number.toLocaleString()); // "123.456,789" (depending on locale)

1