// #1
// const name = "Генератор защитного поля";
// let price = 1000;

// console.log(`Выбран ${name} , цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name} , цена за штуку ${price} кредитов`);

// #2

// const total = 100;
// let ordered = 50;

// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }

// ordered = 20;

// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }

// ordered = 130;

// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }

// #3

// const ADMIN_PASSWORD = "pass";
// let message;
// message = prompt("Введите пароль");
// if (message === null) {
//   alert("Отменено пользователем!");
// } else if (message === ADMIN_PASSWORD) {
//   alert("Добро пожаловать!");
// } else {
//   alert("Доступ запрещен, неверный пароль!");
// }

// #4

// const credits = 23580;
// const pricePerDroid = 3000;
// let message = +prompt("Введите количество дроидов");
// let totalPrice;

// if (message === 0) {
//   alert("Отменено пользователем!");
// } else if (message) {
//   totalPrice = pricePerDroid * message;
// }
// if (credits < totalPrice) {
//   alert("Недостаточно средств на счету!");
// } else if (credits > totalPrice) {
//   alert(
//     `Вы купили ${message} дроидов, на счету осталось ${
//       credits - totalPrice
//     } кредитов.`
//   );
// }

// #5

// const china = "Китай";
// const chile = "Чили";
// const australia = "Австралия";
// const india = "Индия";
// const jamaica = "Ямайка";

// // Китай - 100 кредитов
// // Чили - 250 кредитов
// // Австралия - 170 кредитов
// // Индия - 80 кредитов
// // Ямайка - 120 кредитов

// let delivery = prompt("Введите страну получателя");

// switch (delivery) {
//   case china:
//     console.log(`'Доставка в ${delivery} будет стоить 100 кредитов'`);
//     break;

//   case chile:
//     console.log(`'Доставка в ${delivery} будет стоить 250 кредитов'`);
//     break;

//   case australia:
//     console.log(`'Доставка в ${delivery} будет стоить 170 кредитов'`);
//     break;

//   case india:
//     console.log(`'Доставка в ${delivery} будет стоить 80 кредитов'`);
//     break;

//   case jamaica:
//     console.log(`'Доставка в ${delivery} будет стоить 120 кредитов'`);
//     break;

//   default:
//     alert("В вашей стране доставка не доступна");
// }

// #6

// let input = prompt("Enter your number");
// let total = 0;

// while (true) {
//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   }
//   input = Number(input);
//   if (isNaN(input)) {
//     alert("Вы ввели не число");
//     continue;
//   }
//   total += input;
// }
