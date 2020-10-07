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

const signUpRefs = {
  form: document.getElementById("js-form"),
  inputName: document.getElementById("name"),
  inputLogin: document.getElementById("login"),
  inputPassword: document.getElementById("password"),
};
console.log(signUpRefs);

class User {
  constructor(name, login, password) {
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

const users = [];

signUpRefs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.currentTarget.elements.name.value;
  let login = e.currentTarget.elements.login.value;
  let password = e.currentTarget.elements.password.value;

  const newUser = new User(name, login, password);
  console.log(newUser);
  users.push(newUser);
  e.currentTarget.reset();
});

console.log(users);

//============================================//
