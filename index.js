//5.1
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

//5.2
const exchangeRate = 26; 
const maxDollars = 100; 

for (let dollars = 10; dollars <= maxDollars; dollars += 10) {
    const costInHryvnias = dollars * exchangeRate; 
    console.log(`${dollars} доларів коштує ${costInHryvnias} гривень.`);
}

//5.3
let N = parseInt(prompt("Введіть ціле число N:"));

if (!isNaN(N) && N >= 0) {
    console.log("Цілі числа від 1 до 100, квадрат яких не перевищує " + N + ":");

    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i); // Виводимо число
        }
    }
} else {
    console.log("Будь ласка, введіть дійсне ціле число.");
}