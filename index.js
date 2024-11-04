//7.1
function createSum() {
  let total = 0; 
  
  return function(num) {
    total += num; 
    return total; 
  };
}
const sum = createSum();

console.log(sum(4));  
console.log(sum(6));  
console.log(sum(10)); 

//7.2
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const result = multiply(5)(2); 

//7.3
function requestNumber() {
  let input;
  
  for (let i = 0; i < 10; i++) {
    input = prompt("Введіть число більше 100:");
    
    if (input === null) {
      console.log("Користувач відмінив ввод.");
      return; 
    }
    
    input = Number(input); 
    if (input > 100) {
      console.log("Останнє дійсне введення:", input);
      return; 
    }
  }
  
  console.log("Останнє введення після 10 спроб:", input); 
}

requestNumber();