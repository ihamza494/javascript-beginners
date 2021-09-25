function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}

// function Author(nameValue, ageValue, booksValue) {
//   this.name = nameValue;
//   this.age = ageValue;
//   this.books = booksValue;
// }

// Author.prototype.greeting = function () {
//   console.log(`Hello ${this.name}`);
// };

// Author.prototype.login = function () {
//   console.log("Author logged in");
//   this.greeting();
// };
// Author.prototype.logout = function () {
//   console.log("Author logged out");
// };

class Author {
  name;
  age;
  books;

  constructor(nameValue, ageValue, booksValue = []) {
    this.name = nameValue;
    this.age = ageValue;
    this.books = booksValue;
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }

  login() {
    console.log("Author logged in");
    this.greeting();
  }
  logout() {
    console.log("Author logged out");
  }
}

const author1 = new Author("Muhammad Ahsan Ayaz", 30, []);
const author2 = new Author("Nazish", 16);

console.log(author1);
console.log(author2);


class car {
  
  carMake;
  model;
  color;
  numberOfDoors;
  LicenseNumber;

  constructor(cMakeValue, model, color, numberOfDoors, LicenseNumber){
        this.carMake = cMakeValue;
        this.model = model;
        this.color = color;
        this.numberOfDoors = numberOfDoors ;
        this.LicenseNumber = LicenseNumber;
  }


  c_Make(){
    console.log(`Your car is of ${this.carMake} . `);
  }

  userLogin(){
    console.log(`Thank for Logging In.`);
    this.c_Make();
  }
  carColor(){
    console.log(`Your car is of color ${this.color} .`);
  }

}


const car1 = new car("Audi A5", 2020, "Black", 4, "BA4C6");
console.log(car1);
