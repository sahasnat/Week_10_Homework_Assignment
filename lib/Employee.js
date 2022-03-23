// Constructor function which can be used to create objects containing the properties "ID", "email", and the "makeidentity()" function
class Employee {
  constructor(name,id,email,role= "Employee")
  {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = role;
  }
  getName() {
      return this.name;
  }
  getId() {
      return this.id;
  }
  getEmail() {
      return this.email;
  }
  getRole() {
      return "Employee";
  }
}

module.exports = Employee;
