function saludar(nombre,apellido) {
    return 'hola  '+nombre+' '+apellido ;
}


console.log(saludar('conrado','gonzalez'));

function suma(a,b) {
    return a+b ;
}

console.log(suma(4,6))

function repetir(cantidad){
    return 'casa'.repeat(cantidad);
}
let lasCasas = repetir(4);
console.log(lasCasas)


function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function tripleDeLaSuma(numero3, numero4) {
    let resultadoDeSuma = sumar(numero3, numero4);
    return resultadoDeSuma * 3;
}
let resultado = tripleDeLaSuma(3,2);
console.log(resultado);

function longitudNombreCompleto(nombre1, nombre2){
    let nombreCompleto = nombre1 + ' ' + nombre2
    return nombreCompleto.length
}
let sumaDeNombres = longitudNombreCompleto('carlos', 'gonzalez');
console.log(sumaDeNombres);

function escribirCartelito(titulo,nombre,apellido){
    return  ( titulo + ' ' + nombre + ' ' + apellido ) 
}
console.log (escribirCartelito("Dra.", "Ana", "Pérez"));



function tengoClases(dia) {
	switch ( dia ) {
		//Escribe tu código aquí
		case 'lunes':
			console.log("tenés clases");
			break;
		case 'miércoles':
			console.log("tenés clases");
			break;
		case 'viernes':
			console.log("tenés clases");
			break;
		default:
			console.log("no tenés clases");
			
	}
}
tengoClases();