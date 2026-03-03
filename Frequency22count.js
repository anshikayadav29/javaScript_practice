// Algorithm Name: Frequency Count
function frequencyCount(arr) {
  let map = {};
  for (let x of arr) {
    map[x] = (map[x] || 0) + 1;
  }
  return map;
}

console.log(frequencyCount([1,2,2,3,3,3]));
