//5.1
// for (let i = 20; i <= 30; i += 0.5) {
//   console.log(i);
// }

//5.2
// const exchangeRate = 26; 
// const maxDollars = 100; 

// for (let dollars = 10; dollars <= maxDollars; dollars += 10) {
//     const costInHryvnias = dollars * exchangeRate; 
//     console.log(`${dollars} доларів коштує ${costInHryvnias} гривень.`);
// }

//5.3
// let N = parseInt(prompt("Введіть ціле число N:"));

// if (!isNaN(N) && N >= 0) {
//     console.log("Цілі числа від 1 до 100, квадрат яких не перевищує " + N + ":");

//     for (let i = 1; i <= 100; i++) {
//         if (i * i <= N) {
//             console.log(i); // Виводимо число
//         }
//     }
// } else {
//     console.log("Будь ласка, введіть дійсне ціле число.");
// }

//5.4
// function isPrime(num) {

//     if (num <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// let inputNumber = prompt("Введіть ціле число:");
// let number = parseInt(inputNumber);

// if (isNaN(number)) {
//     alert("Будь ласка, введіть коректне число.");
// } else {
//     if (isPrime(number)) {
//         alert(number + " є простим числом.");
//     } else {
//         alert(number + " не є простим числом.");
//     }
// }

//6.1
// function removeCharacters(str, charsToRemove) {
//     let result = str;
//     charsToRemove.forEach(char => {
//         result = result.split(char).join('');
//     });
//     return result;
// }
// const inputString = prompt("Введіть рядок:");

// const charsToRemoveInput = prompt("Введіть символи для видалення через кому (наприклад, l,d):");

// const charsToRemove = charsToRemoveInput.split(',').map(char => char.trim());

// const result = removeCharacters(inputString, charsToRemove);
// alert("Результат: " + result);

//6.2
// function averageOfNumbers(arr) {
  
//     const numbers = arr.filter(item => typeof item === 'number');
    
//     if (numbers.length === 0) return 0;
    
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
    
//     return sum / numbers.length;
// }
// const arr = [1, 'hello', 3, true, 5, 'world', 7];
// console.log(averageOfNumbers(arr));

//6.3
function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array);