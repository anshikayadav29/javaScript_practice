// Count Even and Odd Numbers
let arr7 = [1, 2, 3, 4, 5, 6];
let even = 0, odd = 0;

for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] % 2 === 0) even++;
  else odd++;
}

console.log(even, odd);
