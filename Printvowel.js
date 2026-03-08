const word = "javascript";

for (const char of word) {
  if ("aeiou".includes(char)) {
    console.log(char);
  }
}
