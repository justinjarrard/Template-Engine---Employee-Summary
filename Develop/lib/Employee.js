// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = this
    this.getName = function () {
      return this.name
    }
    this.getID = function() {
      return this.id
    }
    this.getEmail = function () {
      return this.email
    }
    this.getRole = function () {
      return 'Employee'
    }
  }
}

module.exports = Employee