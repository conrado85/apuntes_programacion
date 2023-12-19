/*Instrucciones
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
Vamos a afianzar nuestros conocimientos sobre arrays y strings realizando diferentes
acciones sobre ellos. Verificaremos si se comportan como esperamos u ocurren resultados
diferentes a los esperados.
2. Define un array que contenga un conjunto de seis (6) productos de
electrodomésticos.
3. Ejecutar sobre el array creado las siguientes acciones:
● Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por
la consola los resultados.
● Extraer el primer elemento del array y agregarlo al final del mismo.
● Agregar al final del array dos (2) nuevos productos.
● Mostrar por la consola la cantidad de elementos que contiene el array.
● Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.
● Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco.
● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello.
● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separadas por una coma */

// punto 2
let electrodomésticos = ['televisor','heladera','microondas','lavarropa','licuadora','tostadora'];
// punto 2
console.log(electrodomésticos[0]);
console.log(electrodomésticos[3]);
console.log(electrodomésticos[5]);

let agregarFinal = electrodomésticos.shift();
//console.log(agregarFinal);
console.log(electrodomésticos.push(agregarFinal));
console.log(electrodomésticos);
console.log(electrodomésticos.push('batidora','cocina'));
console.log(electrodomésticos);
console.log(electrodomésticos.length);

function buscar(array, palabra) {
     
    if (array.indexOf(palabra) !== -1) {
        return 'Producto encontrado' ;

    } else {
        return 'El producto buscado no existe' ;
    } 
        
    }
console.log(buscar(electrodomésticos,'casa'));

let string = (electrodomésticos.join(' '));
//console.log(string);
console.log(string.length);
console.log(string.replace('heladera','frizzer'));
console.log(string.split(' '));



//punto 3
