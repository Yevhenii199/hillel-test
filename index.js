//10.1
// let inf = {
//     name: "Yevhenii",
//     age: 29,
//     location: "Ukraine, Kiev",
//     getInfo: function(){
//         return `Ім'я: ${this.name}, Вік: ${this.age}, Місце проживання: ${this.location}`;
//     }
// }
// console.log(inf.getInfo());

//10.2
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);

//10.3
let contactBook = {
  contacts: [
    { name: "Олександр", phone: "+380123456789", email: "oleksandr@example.com" },
    { name: "Марія", phone: "+380987654321", email: "maria@example.com" }
  ],

  findContactByName: function(name) {
    return this.contacts.find(contact => contact.name === name) || "Контакт не знайдено";
  },

  addContact: function(name, phone, email) {
    this.contacts.push({ name, phone, email });
    console.log(`Контакт ${name} успішно додано.`);
  }
};

console.log(contactBook.findContactByName("Олександр")); 

contactBook.addContact("Іван", "+380555555555", "ivan@example.com");

console.log(contactBook.findContactByName("Іван"));

