// paso 2
let nombre = 'conrado';
let apellido = 'gonzalez';
let sueldoActual =20000 ;
let porcentajeAumento = 25 ;

// paso 3

let calculamosAumento = (sueldoActual * porcentajeAumento )/100;
let nuevoSueldo= (sueldoActual+calculamosAumento);
console.log('Hola, estimad@ '+nombre+' '+apellido);
console.log('En base a su sueldo actual:');
console.log(sueldoActual+' $');
console.log('Ha recibido un aumento del  : '+porcentajeAumento+' %' );
console.log(calculamosAumento);
console.log('y su nuevo sueldo es de  :'+ ' '+nuevoSueldo+' $');