   # funciones.

   ## ¿Que es una funcion?

 Una funcion es un **bloque de codigo** que nos permite **agrupar funcionalidad** para usarla todas las veces
que necesitemos.
normalmente realiza una **tarea especifica** y retorna un valor como resultado.

***
## Estructura basica.

function sumar(a,b){
    return a+b;
};

***

### Palabra reservada.

1-Usamos la palabra **function** para indile a javaScript ue vamos a escribir una funcion.
***
### Nombre de una funcion.
2-Definimmos un nombre para referirnos a nuestra funcion al momento de querer **invocarla**.
***
### Parametros.
3-Escribimos los parentesis y dentro de ellos los parametros de la funcion. si hay mas 
de uno, los separamos usando comas(,).
Si la funcion no lleva parametros, igual debemos escribir los parantesis sin nada adentro().

4-Dentro de nuestra funcion podremos acceder a los parametros como si fueran variables.
Es decir,cojn solo escribir los nombre de los parametros, podemos trabajar con ellos.
***
### Cuerpo.

5-Entre las llaves de apertura y de cierre escribimos la logica de nuestra funcion,es decir,
El codigo que queremos que se ejecute cada vez que la invoquemos.
***                
### El retorno.

6-Es muy comun, ala hora de escribir una funcion, que queramos devolver al exterior el resultado del proceso que estamos ejecutando.
Para eso utilizaremos la palabra reservada  **return** seguida  de lo que queremos retornar.
***
## Funciones declaradas.
Son aquellas que se declara usando la **estructura basica**. Pueden recibir un **nombre**,escrito a continuacion de la palabra reservada **function**,a traves del cual podemos invocarla.
Las funciones con nombre son **funciones nombradas**.

**function** hacerHelado(cantidad){
   **return** ':icecream:'.**repeat**(cantidad);
}
***
## Funciones expresadas.
Son aquellas que **se asignan como valor** de una variable. En  este caso, la funcion en si no tiene nombre, es una **funcion anonima**.
Para invocarla podremos usar el nombre de la variable que declaremos.

 **let** hacerHamburguesa = **function**(cantidad){
    **return**':hamburger:'.**repeat**(cantidad);
 }
***
## Invocacion.

Podemos imaginar las funciones como si fueran maquinas. Durante la **declacion** nos ocupamos de construir la maquina y durante la **invocacion** la ponemos a **funcionar**.

### Invocacion de una funcion.

Antes de poder invocar una funcion, necesitamos que haya sido declarada.Vamos  a declarar una funcion.

**function** hacerUnHelado(){
    **return** ':icecream:';
};

La forma de invocar(tambien se puede decir llamar a ejecutar) una funcion es escribiendo su nombre seguido de apertura y cierre de apertura.

hacerUnHelado();  // retornara ':icecream:'

### Guardar los resultados.

En el caso de querer guardar lo que retorna una funcion, sera necesario almacenarlo en una variable.

**function** hacerahelado(cantidad){
    **return**':icecream:'.**repeat**(cantidad);
}
**let**misHelados = hacerHelado(3);
console.log(misHelados);// mostrara por consola ':icecream::icecream::icecream:'

### Las funciones constan de 4 partes:

1-La palabra reservada function.
 El nombre con el que vamos a llamar a la función:
function nombreFuncion
2-Los paréntesis donde van a ir los parámetros (si es que los necesita):
function nombreFuncion(parametro1,parametro2,...,parametroX)
3-Entre {} llaves el código que queremos que ejecute la función:
4-function nombreFuncion(parametro1,...,parametroX){ codigo }
***
## Scope.

El **scope** o ambito se refiere al alcance que tiene una variable,es decir desde donde podemos acceder a ella.
En javaScript los **scopes** son definidos principalmente por las funciones.

### Scope local.
En el momento de declarar una variable dentro de una funcion, esta pasa a tener alcance local.Es decir, esa variable vive unicamente dentro de esa funcion.
Si queremos hacer uso de la variable por fuera  de la funcion, no vamos  a poder,dado que fuera del **scope** donde fue declarada,esa variable no existe

### Scope global.

En el momento en que declaramos una variable **fuera** de cualquier funcion, la misma pasa a tener **alcance global**.
Es decir, podemos hacer uso de ella desde cualquier lugar del codigo en el que nos encontremos, inclusive dentro de una funcion, y acceder a su valor.
***
## las arrow functions.

### ¿Que es un **Arrow Function**?

Las **arrow function** o funcion flecha nos permiten escribir funciones con una sintaxis mas compacta.
Si pensamos en una funcion simple que podriamos programar
de la manera habitual: una suma de dos numero

**function** sumar(a, b){**return** a + b;}

 Ahora veamos la vercion reducida de esa misma funcion, al transformarla en una funcion arrow.

**let** sumar = (a,b) => a + b;

Las **arrow functions** una de sus ventaja es que son mas concisas que las funciones clasicas creadas con la palabra reservada function.

### Nombre de una arrow function.

Las arrow function **son siempre anomimas**. es decir, que no tienen nombre como las funciones normales.

(a, b)=> a + b;

Si queremos nombrarlas, es nesesario escribirlas como una funcion expresada. es decir, asignarla como un valor de una variable.

**let** sumar = (a, b)=> a + b;

De ahora en mas podremos llamar a nuestra funcion por su nuevo nombre.

### Parametros de un arrow function.

Usamos parentesis para indicar los **parametros**. Si nuestra funcion no recibe parametros,debemos escribirlos igual.

**let** sumar =(a, b)=>a + b;

Una particularidad de este tipo de funciones es que si recibe un unico parametro, podemos prescindir de los parentesis.

**let** doble = a => a * 2;

Como ya vimos, si la funcion tiene una sola linea de codigo, y esta misma es la que hay que **retornar**, no hacen falta las llaves ni la palabra reservada return.
De lo contrario, vamos a necesitar ambas. eso normalmente pasa cuando tenemos mas de una linea de codigo en nuestra funcion

### Ejemplo:
Crea una  arrow funcion para averiguar si un numero es par

**let** esMultiplo = (a, b)=>{
    **let** resto = a % b ; //obtenemos el resto de la divicion
    **return** resto == 0; // si el resto es 0, es multiplo 
}

***
## Callback.


Un **callback** es una **funcion**  que se pasa como parametro de otra funcion. la funcion que lo recibe es quien se encarga de **ejecutarla** cuando sea necesaria.

### El callback anonimo.

En este caso, la funcion que pasamos como **callback** no tiene nombre. Es decir, es una **funcion anonima**.
Como las**funciones anonimas** no pueden ser llamadas por su nombre,debemos escribirla dentro de la funcion que se encarga de llamar al callback.

setTimeout(function(){
    console.log('Hola mundo!')
} , 1000)

### El callback definido.

La funcion que pasamos como callback puede ser una funcion previamente definida. Al momento de pasarla como parametro de otra funcion,nos referiremos a la misma por su nombre.

let miCallback = () => console.log('Hola mundo!');
setTimeout(miCallback, 1000);

*al escribir una funcion como parametro lo hacemos sin los parentesis para evitar que se ejecute. Sera la funcion que la recibe quien se encargue de ejecutarla.* 



### Ejemplo:

crea una calculadora usando lo aprendido con arrow functions y callback.

let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let  multiplicacion = (n1, n2) => n1 * n2;
let  division = (n1, n2 )=> n1 / n2;
let calculadora = (n1, n2, operacion) => operacion(n1 , n2);

console.log(calculadora(4,4,multiplicacion))