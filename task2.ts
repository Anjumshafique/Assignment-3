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

// prices.push(500);
// Error: Property 'push' does not exist on type 'readonly number[]'.

const item: [string, number, boolean] = [
  "Laptop",
  1200,
  true
];

console.log(
  `Name: ${item[0]} | Price: ${item[1]} | In Stock: ${item[2]}`
);