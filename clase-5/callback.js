let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let  multiplicacion = (n1, n2) => n1 * n2;
let  division = (n1, n2 )=> n1 / n2;
let calculadora = (n1, n2, operacion) => operacion(n1 , n2);

console.log(calculadora(4,4,multiplicacion))