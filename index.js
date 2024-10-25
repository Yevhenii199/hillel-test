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