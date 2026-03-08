const word = "hello";
let reverse = "";

for (const char of word) {
  reverse = char + reverse;
}

console.log(reverse);
