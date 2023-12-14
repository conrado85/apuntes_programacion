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

 








