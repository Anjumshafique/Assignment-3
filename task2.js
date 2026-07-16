"use strict";
const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];
const prices = [
    1200,
    25,
    50,
    300
];
// prices.push(500);
// Error: Property 'push' does not exist on type 'readonly number[]'.
const item = [
    "Laptop",
    1200,
    true
];
console.log(`Name: ${item[0]} | Price: ${item[1]} | In Stock: ${item[2]}`);
