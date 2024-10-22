//3.1

//primitive data types
console.log(typeof 1);

console.log(typeof "Hello , my friend!");

console.log(typeof true);

let age = null;
console.log(age);

console.log(typeof undeclaredVariable);

console.log(typeof 1n);

console.log(typeof Symbol() )

//object data types
console.log(typeof {});

console.log(typeof function(){});

//3.2
let line1 = "Maxim";
let line2 = "Yevhenii";
let line3 = "Dima";
let lines = [line1, line2, line3];
lines.sort(() => Math.random() - 0.5);
console.log(lines.join("\n"));

//3.3
function splitNumber(num) {
    // Перевірка, чи число є п'ятизначним
    if (num >= 10000 && num <= 99999) {
        // Перетворюємо число на рядок і розбиваємо на масив цифр
        let digits = num.toString().split('');
        // Об'єднуємо цифри через пробіл і виводимо результат
        console.log(digits.join(' '));
    }
}
splitNumber(10369);

//4.1
let userName = prompt("What is your name?");
alert(`Hello, ${userName}! How are you?`);

//4.2


//4.3
// Запитуємо у користувача рік народження
let birthYear = prompt("Введіть ваш рік народження:");

// Запитуємо у користувача місто
let city = prompt("В якому місті ви живете?");

// Запитуємо у користувача улюблений вид спорту
let favoriteSport = prompt("Який ваш улюблений вид спорту?");

// Обчислюємо вік
let currentYear = new Date().getFullYear();
let age_1 = currentYear - birthYear;

// Перевіряємо, чи є місто столицею
let message;
if (city === "Київ") {
    message = "Ти живеш у столиці України.";
} else if (city === "Вашингтон") {
    message = "Ти живеш у столиці США.";
} else if (city === "Лондон") {
    message = "Ти живеш у столиці Великої Британії.";
} else {
    message = "Ти живеш у місті " + city + ".";
}

// Відображаємо інформацію
alert("Ваш вік: " + age_1 + "\\n" + message);
