//8.1
// let ladder = {
//   step: 0, 

//   up: function () {
//     this.step++;
//     return this; 
//   },

//   down: function () {
//     this.step--;
//     return this; 
//   },

//   showStep: function () {
//     console.log(this.step); 
//     return this;
//   }
// };

// ladder.up().up().down().showStep(); 
// ladder.up().up().down().showStep();


//9.1
let company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
    web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

function sumSalaries(department) {
  let sum = 0;
  if (Array.isArray(department)) {
    for (let employee of department) {
      sum += employee.salary;
    }
  } 
  else {
    for (let subDepartment of Object.values(department)) {
      sum += sumSalaries(subDepartment);
    }
  }
  return sum;
}
console.log(sumSalaries(company));











