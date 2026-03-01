// Find Maximum Element
let arr3 = [25, 10, 45, 30, 5];
let max = arr3[0];

for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] > max) {
    max = arr3[i];
  }
}

console.log(max);
