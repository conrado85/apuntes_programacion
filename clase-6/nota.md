# Los Array.

### Que es un Array?

Los **arrays** nos permite generar una **coleccion de datos ordenados**.

***
## Estructura de un array.

Utilizamos corchetes [] par indicar el inicio y el fin de un array. Y usamos comas, para saparar sus elementos.
Dentro de un array,  podemos almacenar la cantidad de elementos que queramos, sin importar el tipo de dato de cada uno. Es decir, podemos tener en un mismo array de tipo string, number, boolean y todos los demas.

**let** miArray= ['Star wars', true,23];

***
## **Posiciones** dentro de un array.

Cada dato de un array ocupa una posicion numerada conocida como el **indice**. La **primera posicion** de un array es **siempre es 0**.

**let** pelisFavoritas= ['Star wars', 'kill bill', 'Alien'];  
                             0              1          2

Para acceder a un elemento puntual de un array, nombramos  al array y .**Dentro de los corchetes**,escribimos el indice al cual queremos acceder.

pelisfavoritas[2]; //accedemos a la pelicula Alien.

***

## longitud de un array.

Otra propiedad util de los arrays es la longitud. O cantidad de elementos. Podemos saber el numero de elemento usando la propiedad length.

**let** pelisFavoritas= ['Star wars', 'kill bill', 'Alien'];  
                             1      +       1     +   1   =  3

Para acceder al total de elementos de un **array**,nombramos al array y ,seguido de un punto.,escribiremos la palabra length.

**pelisFavoritas**.length;  //devuelve 3, el numero de elemento de un array  

***
## metodos de un array.

Para javaScript, Los arrays son un **tipo especial de objetos**. Por esa razon disponemos de muchos metodos muy utiles a la hora de trabajar con la informacion que hay adentro.
Ya vimos antes que una **funcion** es un **bloque de codigo** que nos permite agrupar funcionalidad para usarla muchas veces. Cuando una **funcion pertenece a un objeto**, en este caso nuestro array, la llamamos **metodo**.

***

## .push()

Agrega uno o varios elementos al final del array.

- **Recibe** uno o mas elementos como parametro.
- **Retorna** la nueva longitud del array.

**let** colores = ['rojo','naranja','azul'];
colores.push('violeta'); // retorna 4

console.log(colores);// ['rojo','naranja','azul','violeta']

***

## .pop()

Elimina el ultimo elemento de un array.

- **No recibe** parametros.
- **devuelve** el elemento eliminado

**let** colores = ['rojo','naranja','azul'];

**let** ultimoColor = colores.pop();

console.log(colores); // ['rojo','naranja']
console.log(ultimoColor); //  [''azul']

***

## .shift()

Elimina el primer elemento de un array.

- **No recibe** parametros.
- **devuelve** el elemento eliminado.

**let** colores = ['rojo','naranja','azul'];

**let** ultimoColor = colores.shift();

console.log(colores); // ['naranja','Azul']
console.log(ultimoColor);  //  ['Rojo']

***

## .unshit()

Agrega uno o varios elementos al principio de un array.

- **Recibe** uno o mas elementos como parametros.
- **retorna** la nueva longitud del array.

**let** colores = ['rojo','naranja','azul'];

  colores.unshift('Verde');

console.log(colores); // ['Verde','naranja','Azul']

***

## .join()

Une los elementos de un array utilizando el separador que le especifiquemos.Si no lo especificamos, utiliza comas.

- **recibe** un separador(string),es opcional.
- **retornar** un string con  los elementos unidos.

**let** colores = ['rojo','naranja','azul'];

**let** separadosPorComa = colores.join();

console.log(colores); // ['Rojo,aranja,Azul']

***

## .indexOf()

Busca en el array el elemento que recibe como parametro.

- **Recibe** un elemento a buscar en el array.
- **Retorna** el primer indice donde encontro lo que buscabamos. Si no lo encuentra, retorna un -1.

**let** colores = ['rojo','naranja','azul'];

  colores.indexof('Azul');  // encontro lo que buscaba.Devuelve 2, el indice del elemento.

  colores.indexOf('banana'); //no encontro lo que buscaba. devuelve -1.

  ***

  ## .lastIndexOf()

  Similar a *indexOF()*,con la salvedad de que empieza buscando el elemento por el **final del array**(de atras hacia adelante).
  En caso de haber elementos repetidos.devuelve la posicion del primero que encuentre(o sea el ultimo si miramos desde el principio).

  **let** colores = ['rojo','naranja','azul'];

  colores.lastIndexOf('naranja');

  ***

  ## includes().

  Tambien similar a .indexOf(), con la salvedad que retorna un booleano.

  - **Recibe** un elemento a buscar en el array.
  - **Retorna** true si encuentra lo que buscamos, false en caso contrario.


  **let** colores = ['rojo','naranja','azul'];

  colores.includes('rojo'); // de encontrarlo devolvera un true
  colores.includes('azul'); // de no encontrar devuelve un false

 




***

### Strings

## Propiedades y metodos de strings

* "Para javaScript los strings son como un array de caracteres.
* Por esa razon disponemos de propiedades y metodos muy utiles a la hora de trabajar con la informacion que hay adentro" .

***

Los **string**  en javaScript.

En muchos sentidos, para javaScript, Un strings no es mas que un **array de caracteres**. Al igual que en los arrays, la primera posicion siempre sera 0.

**let** nombre = 'fran'; //contiene 3 posiciones (f=0),(r=1),(a=2) y (n=3).

Para acceder a un caracter puntual de  de un strings, nombramos al string y, **dentro de los corchetes**, escribimos el indice al cual queremos acceder.

nombre[2]; // accedemos a la letra 'a', el indice 2 del string

***

## .Length

Esta propiedad retorna total de caracteres del string, incluidos los espacios.Como es una propiedad, al invocarla, no necesitaremos los parentesis.


 **let** miSerie = 'Mad Men';
miSerie.**length**;  // devuelve 7

### un array.

**let** arrayNombre = ['Bart', 'Lisa', 'Moe'];
arrayNombre.**length**; //devuelve 3

arrayNombre[0].**length**; //corresponde a 'bart', devuelve 4.

***

## .indexOf().

Busca, en el string, el string que recibe como parametro.

- **Recibe** un elemento a buscar en el array.
- **Retorna** el primer indice donde encontro lo que buscabamos. si no lo encuentra, retorna un  -1.

**let** saludo = '¡hola! Estamos programando ';

saludo.indexOf('Estamos');  //devuelve 7
saludo.indexOf('vamos');   //devuelve -1, no lo encontro
saludo.indexOf('o');  //encuentra la letra 'o' que esta  en la posicion 2, devuelve 2 y termina la ejecucion.

"Ya vimos antes que una funcion es un bloque de codigo que nos permite agrupar funcionalidad para usarla muchas veces.
cuando una **funcion le pertenece a un objeto**, en este caso nuestro string, la llamamos metodo."

***
 
 ## .slice()

 Corta el string y devuelve una parte del string donde se aplica.

- **Recibe** 2 numeros como parametros(puede ser negativos)
          -El indice desde inicia el corte.
          -el indice hasta donde hacer el corte(es opcional).

- **Retorna**la parte correspondiente al corte.

**let** saludo = '¡hola! Estamos programando ';

saludo.**slice**(7,14)  //devuelve 'estamos'.
saludo.**slice**(15)  //devuelve 'programando'.
saludo.**slice**(-10)  // ¿que devuelve? ! A investigar¡.

***

## .trim()

Elimina los espacios que esten al principio y al final de un string.

- **no recibe** parmetros.
- No quita los espacios del medio.

**let** saludo = '   ¡hola! Estamos programando     ';

saludo.**trim**();  // devuelve '¡hola! Estamos programando' sin los espacios del principio y el final.

***

## .split()

Divide un string en partes.
 - **Recibe** un string que usara como separador de las partes.
 - **Devuelve un array** con partes del string.

**let** saludo = '¡hola! Estamos programando ';
 
saludo.**split**(' ');  // devuelve ['¡hola!','Estamos','programando']

***

## .replace()

Reemplasa una parte del string por otra.
- **Recibe** dos string como parametro:
    - El string que queremos buscar.
    - El string que usaremos de reemplazo.
- **Retorna** un nuevo string con el reemplazo.

**let** saludo = '¡hola! Estamos programando ';
saludo.**replace**('programando','jugando')  //devuelve hola estamos jugando

***

"Si  bien **cada metodo** realiza una **accion muy simple**, cuando los **combinamos** podemos lograr **resultados** mucho mas **complejos y utiles**"










