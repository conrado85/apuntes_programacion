// practica strings.

let nombre = 'fran';
console.log(nombre[2]);

// length

let arrayNombre = ['Bart','Lisa','Moe'];
console.log(arrayNombre.length)
console.log(arrayNombre[0].length)
console.log(arrayNombre[1].length)
console.log(arrayNombre[2].length)

//indexOF

let saludo = '¡hola! Estamos programando';

console.log(saludo.indexOf('Estamos'));
console.log(saludo.indexOf('vamos'));
console.log(saludo.indexOf('o'))

// .slice()

console.log(saludo.slice(7 ,14));
console.log(saludo.slice(15));
console.log(saludo.slice(-11))

//  .trim()

let saludos = '    ¡hola! Estamos programando     '
console.log(saludos)
console.log(saludos.trim());

// .split()

console.log(saludo.split(' '));

//.replace

console.log(saludo.replace('programando','jugando'))
