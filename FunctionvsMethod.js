function greet(name) {
  return "Hello " + name;
}

let user = {
  name: "Aman",
  greet: function() {
    return "Hi " + this.name;
  }
};

console.log(greet("Aman"));
console.log(user.greet());
