const data = {
  user: {
    id: 101,
    name: "Karan"
  }
};

const { user: { name } } = data;

console.log(name);
