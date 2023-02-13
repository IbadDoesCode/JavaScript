//  Comments

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
