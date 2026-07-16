"use strict";
let riskyData;
riskyData = 100;
riskyData = "Hello";
console.log(riskyData.toUpperCase());
// Dangerous because 'any' disables type checking.
let safeData;
safeData = "Hello";
// safeData.toUpperCase();
// Error: Object is of type 'unknown'.
if (typeof safeData === "string") {
    console.log(safeData.toUpperCase());
}
let move = "north";
console.log(move);
// move = "diagonal";
// Error: Type '"diagonal"' is not assignable to type 'Direction'.
