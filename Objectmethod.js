let person = {
  name: "Neha",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

person.greet();
