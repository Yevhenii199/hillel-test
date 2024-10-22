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
function checkDigits(number) {
    // Переконаємось, що число тризначне
    if (number < 100 || number > 999) {
        console.log("Будь ласка, введіть тризначне число.");
        return;
    }

    // Перетворюємо число на рядок для легшої обробки
    const strNumber = number.toString();

    // Отримуємо цифри числа
    const digit1 = strNumber[0];
    const digit2 = strNumber[1];
    const digit3 = strNumber[2];

    // Перевірка, чи всі цифри однакові
    const allSame = (digit1 === digit2 && digit2 === digit3);
    if (allSame) {
        console.log("Всі цифри однакові.");
    } else {
        console.log("Не всі цифри однакові.");
    }

    // Перевірка на наявність однакових цифр
    const hasDuplicates = (digit1 === digit2 || digit1 === digit3 || digit2 === digit3);
    if (hasDuplicates) {
        console.log("Є однакові цифри.");
    } else {
        console.log("Однакових цифр немає.");
    }
}