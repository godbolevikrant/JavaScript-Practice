
let inventory = [
    { id: 1, name: "Laptop", quantity: 10 },
    { id: 2, name: "Smartphone", quantity: 20 },
    { id: 3, name: "Tablet", quantity: 15 }
]

console.log(inventory);
// Output: [ { id: 1, name: 'Laptop', quantity: 10 }, { id: 2, name: 'Smartphone', quantity: 20 }, { id: 3, name: 'Tablet', quantity: 15 } ]

function addItem(id, name, quantity) {
    inventory.push({ id, name, quantity });
}

addItem(4, "Headphones", 25);
console.log(inventory);
// Output: [ { id: 1, name: 'Laptop', quantity: 10 }, { id: 2, name: 'Smartphone', quantity: 20 }, { id: 3, name: 'Tablet', quantity: 15 }, { id: 4, name: 'Headphones', quantity: 25 } ]

function updateQuantity(id, newQuantity){
    const item = inventory.find(item => item.id === id);
    if(item){
        item.quantity = newQuantity;
    }
}

updateQuantity(2, 30);
console.log(inventory);
// Output: [ { id: 1, name: 'Laptop', quantity: 10 }, { id: 2, name: 'Smartphone', quantity: 30 }, { id: 3, name: 'Tablet', quantity: 15 }, { id: 4, name: 'Headphones', quantity: 25 } ]

function removeItem(id){
    inventory = inventory.filter(item => item.id !== id);
}

removeItem(1);
console.log(inventory);
// Output: [ { id: 2, name: 'Smartphone', quantity: 30 }, { id: 3, name: 'Tablet', quantity: 15 }, { id: 4, name: 'Headphones', quantity: 25 } ]        