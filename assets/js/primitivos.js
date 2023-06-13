let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

// Otras maneras de asignar Strings

nombre = "Tía May";
console.log(nombre);


nombre = `Mary Jane`;
console.log(nombre);

// Typeof

console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

let isMarvel = true;
console.log(typeof isMarvel);

// No hay flotantes ni enteros
let edad = 33.001;
console.log(typeof edad);

edad = 33;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder); // hasta este punto es undefined.

let soyNull = null;
console.log(typeof soyNull); // Objeto


// Symbol? para qué sirve??
let soySymbol = Symbol('a');
let soySymbol2 = Symbol('a');
console.log(typeof soySymbol);
console.log(typeof soySymbol2);

console.log(soySymbol === soySymbol2);

