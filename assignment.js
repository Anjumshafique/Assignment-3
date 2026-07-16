"use strict";
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["F"] = 3] = "F";
})(Grade || (Grade = {}));
const student = {
    name: "Ali",
    age: 20,
    isPassed: true,
    grade: Grade.A
};
console.log(`${student.name} is ${student.age} years old, passed: ${student.isPassed}, Grade: ${Grade[student.grade]}`);
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
//prices.push(500);
const item = [
    "Laptop",
    1200,
    true
];
console.log(`Name: ${item[0]} | Price: ${item[1]} | In Stock: ${item[2]}`);
