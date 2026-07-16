enum Grade {
  A,
  B,
  C,
  F
}

const student: {
  name: string;
  age: number;
  isPassed: boolean;
  grade: Grade;
} = {
  name: "Ali",
  age: 20,
  isPassed: true,
  grade: Grade.A
};
console.log(
  `${student.name} is ${student.age} years old, passed: ${student.isPassed}, Grade: ${Grade[student.grade]}`
);
const products: string[] = [
  "Laptop",
  "Mouse",
  "Keyboard",
  "Monitor"
];
const prices: ReadonlyArray<number> = [
  1200,
  25,
  50,
  300
];
//prices.push(500);
const item: [string, number, boolean] = [
  "Laptop",
  1200,
  true
];
console.log(
  `Name: ${item[0]} | Price: ${item[1]} | In Stock: ${item[2]}`
);
