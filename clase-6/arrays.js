// utilizamos el metodo push.

let  colores = ['Rojo','Naranja','azul'];
colores.push('Violeta');
console.log(colores);

//utilizamos el metodo pop.

let ultimoColor = colores.pop();
console.log(colores);
console.log(ultimoColor);

// utilizamos el metodo shift.

let primerColor = colores.shift();

console.log(colores);
console.log(primerColor);

// utilizamos el metodo unshift.

colores.unshift('Verde');
colores.unshift('Violeta','blanco');


console.log(colores)

// utizamos el metodo join.

let separadoPorComa = colores.join();
console.log(separadoPorComa);

let separadoPorNumeral = colores.join(' # ');
console.log(separadoPorNumeral);
