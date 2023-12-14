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

// utilizamos el metodo indexOf().

let buscar = colores.indexOf('blanco');
console.log(buscar);

let buscar1 = colores.indexOf('amarillo');
console.log(buscar1);

// utilizamos el metodo lastIndexOf().

let buscandoElemento = colores.lastIndexOf('Verde');
console.log(buscandoElemento)

// utilizamos  el metodo includes()

let encontrado = colores.includes('blanco');
console.log(encontrado);

let encontrado1 = colores.includes('amarillo');
console.log(encontrado1);