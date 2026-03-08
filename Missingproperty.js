const user = { username: "admin" };

const { username, password = "12345" } = user;

console.log(username);
console.log(password);
