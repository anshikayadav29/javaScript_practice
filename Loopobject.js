let person = {
  name: "Anshika",
  age: 21,
  city: "Lucknow"
};

for (let key in person) {
  console.log(key + " : " + person[key]);
}
