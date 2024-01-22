let person = {
    name: 'John',
    age: 25,
    address: '123 Main St',
};
console.log(person);

person.birthdate = '1990-01-01';
console.log(person);

delete person.age;
console.log(person);