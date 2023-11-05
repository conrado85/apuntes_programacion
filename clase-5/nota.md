// funciones.

* una funcion es un bloque de codigo que nos permite agrupar  funcionalidad para usarla todas las veces
que necesitemos.
normalmente realiza una tarea especifica y retorna un valor como resultado.

* estructura basica.

function sumar(a,b){
    return a+b;
};

* palabra reservada.

1-Usamos la palabra function para indile a javaScript ue vamos a escribir una funcion.
2-Definimmos un nombre para referirnos a nuestra funcion al momento de querer invocarla.
3-Escribimos los parentesis y dentro de ellos los parametros de la funcion. si hay mas 
de uno, los separamos usando comas(,).
Si la funcion no lleva parametros, igual debemos escribir los parantesis sin nada adentro().
4-Dentro de nuestra funcion podremos acceder a los parametros como si fueran variables.
es decir,con solo escribir los nombre de los parametros, podemos trabajar con ellos.
5-Entre las llaves de apertura y de cierre escribimos la logica de nuestra funcion,es decir,
el codigo que queremos que se ejecute cada vez que la invoquemos.
6-Es muy comun, ala hora de escribir una funcion, que queramos devolver al exterior el resultado del proceso que estamos ejecutando.
Para eso utilizaremos la palabra reservada  "return" seguida  de lo que queremos retornar.

* invocacion.

podemos imaginar las funciones como si fueran maquinas. Durante la declacion nos ocupamos de construir la maquina y durante la invocacion la ponemos a funcionar.

* invocacion de una funcion.

antes de poder invocar una funcion, necesitamos que haya sido declarada.vamos  a declarar una funcion.

function hacerUnHelado(){
    return 'hola mundo';
};

la forma de invocar(tambien se puede decir llamar a ejecutar) una funcion es escribiendo su nombre seguido de apertura y cierre de apertura.

hacerUnHelado();  // retornara 'hola mundo'

* Las funciones constan de 4 partes:

La palabra reservada function.
 El nombre con el que vamos a llamar a la función:
function nombreFuncion
Los paréntesis donde van a ir los parámetros (si es que los necesita):
function nombreFuncion(parametro1,parametro2,...,parametroX)
Entre {} llaves el código que queremos que ejecute la función:
function nombreFuncion(parametro1,...,parametroX){ codigo }

* las arrow functions.

como ya vimos,una funcion es un bloque de codigo que podemos invocar las veces que sean necesarias.puede realizar una tarea especifica y retornar un valor,y nos permite agrupar el codigo que vallamos usar muchas veces.
existen una forma un poco mas compactade crear o expresar nuestra funcion.
las arrow functions una de sus ventaja es que son mas concisas que las funciones clasicas creadas con la palabra reservada function.


* callback.


un callback es una funcion que se pasa como parametro de otra funcion. la funcion que lo recibe es quien se encarga de ejecutarla cuando sea necesaria.