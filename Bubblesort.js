// Bubble Sort
let arr8 = [5, 3, 8, 4, 2];

for (let i = 0; i < arr8.length; i++) {
  for (let j = 0; j < arr8.length - i - 1; j++) {
    if (arr8[j] > arr8[j + 1]) {
      let temp = arr8[j];
      arr8[j] = arr8[j + 1];
      arr8[j + 1] = temp;
    }
  }
}

console.log(arr8);
