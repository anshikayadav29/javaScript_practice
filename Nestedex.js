const company = {
  employee: {
    name: "Ravi",
    salary: 50000
  }
};

const { employee: { name, salary } } = company;

console.log(name, salary);
