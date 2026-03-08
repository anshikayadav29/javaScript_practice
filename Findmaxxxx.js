const numbers = [5,10,2,8];
let max = numbers[0];

for (const num of numbers) {
  if (num > max) {
    max = num;
  }
}

console.log(max);
