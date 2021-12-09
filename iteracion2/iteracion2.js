// iteracion 2

//iteracion 2.1.1
const character = {
    name: 'Jack Sparrow',
    age: 10
};
character.age = 25;
console.log(character);

//iteracion 2.1.2
let firstName = 'Jhon';
let lastName = 'Snow';
let age = 24;
console.log('Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' y me gustan los lobos.');

//iteracion 2.1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

//iteracion 2.1.4
let globalBasePrice = 10000;

const car1 = {
    name: 'BMW m&m',
    basePrice: 50000,
    finalPrice: 60000
}

const car2 = {
    name: 'Chebrolet Corbina',
    basePrice: 70000,
    finalPrice: 80000
}

globalBasePrice = 25000;

console.log(car1.basePrice + globalBasePrice);
console.log(car2.basePrice + globalBasePrice);