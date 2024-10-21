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



