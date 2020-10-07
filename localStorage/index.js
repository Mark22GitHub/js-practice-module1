//====================ВАЛИДАЦИЯ======================//

// let form = document.querySelector(".js-feedback-form");
// // let textarea = document.querySelector("#exampleMessage");
// const nameInput = document.querySelector("#exampleNameInput");
// const emailInput = document.querySelector("#exampleEmailInput");
// const addressInput = document.querySelector("#exampleAddressInput");

// let myMessages = [];

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let userName = event.currentTarget.elements.userName.value;
//   let userEmail = event.currentTarget.elements.userEmail.value;
//   let userAddress = event.currentTarget.elements.userAddress.value;
//   let userMessage = event.currentTarget.elements.message.value;
//   console.log(userName, userEmail, userAddress, userMessage);

//   let myMessage = new UserMessage(
//     userName,
//     userEmail,
//     userAddress,
//     userMessage
//   );

//   console.log(myMessage);
//   myMessages.push(JSON.stringify(myMessage));

//   event.currentTarget.reset();
// });

// console.log(myMessages);

// form.addEventListener("input", (event) => {
//   if (event.target.id === "exampleNameInput") {
//     localStorage.setItem("userName", event.target.value);
//     let userName = event.target.value;
//     console.log(userName);
//   }
//   if (event.target.id === "exampleEmailInput") {
//     localStorage.setItem("userEmail", event.target.value);
//     let userEmail = event.target.value;
//     console.log(userEmail);
//   }
//   if (event.target.id === "exampleAddressInput") {
//     localStorage.setItem("userAddress", event.target.value);
//     let userAddress = event.target.value;
//     console.log(userAddress);
//   }

//   if (event.target.id === "exampleMessage") {
//     localStorage.setItem("message", event.target.value);
//     let userMessage = event.target.value;
//     console.log(userMessage);
//   }
// });

// class UserMessage {
//   constructor(name, email, address, message) {
//     this.name = name;
//     this.email = email;
//     this.address = address;
//     this.message = message;
//   }
// }
//============================================//

//====================ФОРМА РЕГИСТРАЦИИ=====================//

// const signUpRefs = {
//   form: document.getElementById("js-form"),
//   inputName: document.getElementById("name"),
//   inputLogin: document.getElementById("login"),
//   inputPassword: document.getElementById("password"),
// };
// console.log(signUpRefs);

// class User {
//   constructor(name, login, password) {
//     this.name = name;
//     this.login = login;
//     this.password = password;
//   }
// }

// const users = [];

// signUpRefs.form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let name = e.currentTarget.elements.name.value;
//   let login = e.currentTarget.elements.login.value;
//   let password = e.currentTarget.elements.password.value;

//   const newUser = new User(name, login, password);
//   console.log(newUser);
//   users.push(newUser);
//   e.currentTarget.reset();
// });

// console.log(users);

//============================================//

//====================CREATE NEW PRODUCT====================//

// const productRefs = {
//   form: document.getElementById("product"),
//   image: document.getElementById("picture"),
//   title: document.getElementById("title"),
//   description: document.getElementById("description"),
//   price: document.getElementById("price"),
//   quantity: document.getElementById("quantity"),
// };

// console.log(productRefs);

// class Product {
//   constructor(picture, title, description, price, quantity) {
//     this.picture = picture;
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.quantity = quantity;
//   }
// }

// const products = [];

// productRefs.form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let img = event.currentTarget.elements.picture.value;
//   let title = event.currentTarget.elements.title.value;
//   let description = event.currentTarget.elements.description.value;
//   let price = event.currentTarget.elements.price.value;
//   let quantity = event.currentTarget.elements.quantity.value;

//   const newProduct = new Product(img, title, description, price, quantity);
//   console.log(newProduct);

//   const jsonProduct = JSON.stringify(newProduct);
//   console.log(jsonProduct);

//   products.push(newProduct);

//   event.currentTarget.reset();

//   return products;
// });

// console.log(products);

//============================================//

//====================CREATE NEW Employee====================//

// const employeeRefs = {
//   form: document.getElementById("employee"),
//   firsName: document.getElementById("firstName"),
//   lastName: document.getElementById("lastName"),
//   age: document.getElementById("age"),
//   email: document.getElementById("email"),
//   phone: document.getElementById("email"),
// };

// class Employee {
//   constructor(firstName, lastName, age, email, phone) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.phone = phone;
//   }
// }

// const employees = [];

// employeeRefs.form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let frNam = event.currentTarget.elements.firstName.value;
//   let lsNam = event.currentTarget.elements.firstName.value;
//   let age = event.currentTarget.elements.age.value;
//   let email = event.currentTarget.elements.email.value;
//   let phone = event.currentTarget.elements.phone.value;

//   const newEmployee = new Employee(frNam, lsNam, age, email, phone);
//   console.log(newEmployee);

//   employees.push(JSON.stringify(newEmployee));

//   event.currentTarget.reset();

//   return employees;
// });

// console.log(employees);
