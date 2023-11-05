// logicos. 

/* permiten combinar valores booleanos, el resultado tambien es un booleano 
existen tres operadores &&(and) || (or)  !(negacion) */


// && and.

let logica = (10>15)&&(10!=20);
console.log(logica);
// en este ejemplo vemos como al comparar la primera opcion da false el operador "and" 
// da como resultado false

let logica1 = (10>5)&&(10!=20);
console.log(logica1);
// en este caso las dos operaciones son verdaderas dando como resultado verdadero

// || or .

let logica2 = (10>15)||(10!=20);
console.log(logica2);
// en este caso con que una comparacion de verdadera el resultado sera verdadero.


// negacion !.
//  niega la condicion si es true pasa a ser false y viceversa.

let logica3 = ! true;
console.log(logica3);

let logica4 = ! (10>5);
console.log(logica4);

// los operadores logicos por lo general devolveran un booleano.
// que tienen en comun los operadores logicos con los de comparacion?
// en ambos casos los dos devuelve un booleano como resultado
// en que se diferencian la comparacion simple  extricta?
// la compacion extricta compara el valor del tipo de dato, la 
//comparacion simple se fija solo el valor. 

