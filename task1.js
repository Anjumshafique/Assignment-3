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
// student.age = "twenty";
// Error: Type 'string' is not assignable to type 'number'.
