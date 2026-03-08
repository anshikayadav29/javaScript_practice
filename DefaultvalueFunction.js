function showUser({ name, city = "Unknown" }) {
  console.log(name, city);
}

showUser({ name: "Amit" });
