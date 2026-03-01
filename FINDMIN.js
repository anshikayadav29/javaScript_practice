// Find Minimum Element
let arr4 = [25, 10, 45, 30, 5];
let min = arr4[0];

for (let i = 1; i < arr4.length; i++) {
  if (arr4[i] < min) {
    min = arr4[i];
  }
}

console.log(min);
