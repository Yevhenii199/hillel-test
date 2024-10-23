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
let line2 = "Artem";
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
    if (number < 100 || number > 999) {
        return "Будь ласка, введіть тризначне число.";
    }

    const digits = String(number).split('').map(Number);
    
    const allEqual = digits[0] === digits[1] && digits[1] === digits[2];
    const hasDuplicates = new Set(digits).size < digits.length;

    return {
        allEqual,
        hasDuplicates
    };
}
// Приклад використання:
const userInput = 121; // Замість цього введіть тризначне число
const result = checkDigits(userInput);
console.log(result); // { allEqual: false, hasDuplicates: true }

//4.3
// Чемпіони у різних видах спорту
const sportsChampions = {
    баскетбол: { firstName: "Майкл", lastName: "Джордан" },
    футбол: { firstName: "Ліонель", lastName: "Мессі" },
    тенніс: { firstName: "Роджер", lastName: "Федерер" },
};
// Запитуємо рік народження
const birthYear = prompt("Введіть свій рік народження:");
if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свою дату народження.");
} else {
    // Запитуємо місто
    const city = prompt("В якому місті ви живете?");
    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто.");
    } else {
        // Запитуємо улюблений вид спорту
        const sport = prompt("Введіть ваш улюблений вид спорту:");
        if (sport === null) {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
        } else {
            // Обчислюємо вік
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;

            // Визначаємо країну для столиць
            const capitals = {
                Київ: "України",
                Вашингтон: "США",
                Лондон: "Великобританії"
            };
            const isCapital = capitals[city] ? `Ти живеш у столиці ${capitals[city]}...` : `Ти живеш у місті ${city}...`;

            // Перевіряємо, чи є улюблений вид спорту серед чемпіонів
            const champion = sportsChampions[sport.toLowerCase()];
            const sportMessage = champion ? `Круто! Хочеш стати ${champion.firstName} ${champion.lastName}?` : '';

            // Відображаємо інформацію
            alert(`Ваш вік: ${age}\n${isCapital}\n${sportMessage}`);
        }
    }
}
