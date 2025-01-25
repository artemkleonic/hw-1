let age = 25;
console.log("Вік:", age);

let name = "Андрій";
console.log("Ім'я:", name);

let isStudent = true;
console.log("Чи є студентом:", isStudent);

let myString = "Найкращий спосіб передбачити майбутнє — створити його.";
console.log("Улюблена цитата:", myString);

let myNumber = 42;
myNumber += 10;
console.log("Моє число після додавання 10:", myNumber);

let myNull = null;
console.log("Значення myNull:", myNull);

let userName = prompt("Введіть ваше ім'я:");
alert(`Привіт, ${userName}!`);

let userConfirmation = confirm("Чи підтверджуєте дію?");
if (userConfirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

alert("Увага! Ця дія може бути небезпечною.");
let dangerConfirmation = confirm("Ви впевнені, що хочете продовжити?");
if (dangerConfirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}
