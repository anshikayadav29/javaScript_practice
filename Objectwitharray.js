let company = {
  name: "TechSoft",
  employees: ["Aman", "Riya", "Neha"],
  showEmployees: function() {
    console.log(this.employees);
  }
};

company.showEmployees();
