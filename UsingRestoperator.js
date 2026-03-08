const student = {
  name: "Rahul",
  age: 20,
  city: "Delhi"
};

const { name, ...rest } = student;

console.log(name);
console.log(rest);
