//10.1
let inf = {
    name: "Yevhenii",
    age: 29,
    location: "Ukraine, Kiev",
    getInfo: function(){
        return `Ім'я: ${this.name}, Вік: ${this.age}, Місце проживання: ${this.location}`;
    }
}
console.log(inf.getInfo());

//10.2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);






