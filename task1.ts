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

// student.age = "twenty";
// Error: Type 'string' is not assignable to type 'number'.