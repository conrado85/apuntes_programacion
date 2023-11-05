//condicionales.

/**Instrucciones
1. Crea una carpeta de trabajo y dentro de ella un archivo JavaScript (.js).
2. Desarrolla un programa que le indique al usuario - en base a su perfil o
responsabilidades - qué puede hacer o no en el sistema. Para eso debes crear una
variable llamada: “perfil” y asignarle alguno de estos valores:
a. administrador
b. asistente
c. invitado.
Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
console.log():
A. Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
mensaje: “Debe especificar el perfil del usuario”.
B. Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la
consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
uso del sistema”.
C. Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar
este mensaje: “Usted sólo tiene permisos de registrar, modificar y
consultar datos”.
D. Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este
mensaje: “Usted sólo tiene permisos de consultar datos”.
E. Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
este mensaje: “Debe especificar un perfil válido”. */
 
let perfil = 'asistente';

if (perfil=='administrador'){
    console.log('usted tiene todos los privilegios de uso del sistema.');
} else if(perfil =='asistente'){
    console.log('usted solo tiene permiso de registrar,modificar y consultar datos.');
}else if(perfil == 'invitado'){
    console.log('usted solo tiene oermiso de consultar datos.');
}else{
    console.log('debe especificar un perfil valido')
}


/**Instrucciones
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrolla el programa Ajuste tarifario de energía eléctrica. Utilizando el operador
condicional ternario, queremos determinar cuánto va a pagar un hogar según su
consumo. Veamos los pasos a seguir...
a. Crear una variable “pagoMes” y asignarle un pago actual de energía
eléctrica por mes.
b. Crear otra variable “consumoKWH” y asignarle un consumo mensual de
Kilovatios hora de consumo mensual por el hogar.
c. Si en el hogar se consumen más de 300 kwh por mes, entonces al pago actual
se le incrementará un 20%.
d. En el caso contrario se le mantendrá el subsidio, es decir que no tendrá ningún
aumento..

3. Una vez obtenido el monto del pago por consumo mostrar al usuario este mensaje:

“Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
cumplimos con informarle que se ha ajustado el total a pagar, que será de $14400” */

let consumoKWH=200;
let consumo=consumoKWH * 26.666;
let pagoMes=(consumoKWH>300)?(consumo * 1.20):consumo;

console.log('Debido a que su hogar tuvo un consumo de '+ consumoKWH +' kwh' +' , en base al ajuste tarifario hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20 %,cumplimos con informarle que se ha ajustado el total a pagar, que será de'+' $ '+pagoMes)


/**Instrucciones
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa traductor condicional. La idea es que si el usuario ingresa
una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la
misma palabra traducida al idioma inglés. Te recomendamos usar la estructura
switch. Puedes ayudarte con Google Traductor.
En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario un mensaje
que le informe que “La palabra ingresada es incorrecta”. */

let palabra = 'perro';
let mensaje = '';

switch (palabra.toLowerCase()) {
    case 'perro':
        mensaje = 'dog';
        break;
    case 'gato':
        mensaje = 'cat';
        break;
    case 'puerta':
        mensaje = 'puerta';
        break;
    case 'ventana':
        mensaje = 'window';
        break;
    case 'mesa':
        mensaje = 'table';
        break;    
    default:
        mensaje = 'La palabra ingresada es incorrecta'
        break;
}

console.log(mensaje);

/**Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada:
“sumar”, “restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle
un mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar
- restar- multiplicar- dividir”.
A continuación te dejamos un diagrama de flujo, para que te des una idea de la lógica que
podemos encontrar en una calculadora. Recordá igualmente que en tu caso debes usar la */


let operador = 'multiplicar';
let operacion = '';
let numero = 5 ;
let numero1 = 30 ;


switch (operador.toLowerCase()) {
    case 'suma':
        operacion = numero+numero1;
        break;
    case 'resta':
        operacion = numero-numero1; 
        break;
    case 'multiplicar':
        operacion = numero*numero1;
        break;
    case 'dividir':
        operacion = numero/numero1;
        break 
    default:
        operacion = 'Las operaciones aceptadas son: sumar, restar, multiplicar y dividir'
        break;
}
console.log('El resultado de la  '+ operador+' '+numero+' y '+ numero1+' es '+ operacion);


/**Instrucciones
Si llegaste hasta acá, estás avanzando muy bien. ¡Felicitaciones!

Si querés seguir practicando, te proponemos este otro ejercicio. Ten en cuenta que este
ejercicio puede escalar en dificultad.

Paciencia, trata de resolverlo con las herramientas que tengas a tu disposición. Te
recomendamos que busques información extra en Google o documentaciones que
conozcas.

1. En la carpeta ya creada, crear un nuevo archivo JavaScript (.js).
2. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar
el aterrizaje o no. Considerará para ello la altura y la velocidad del vuelo, teniendo en
cuenta que:

● La velocidad debe estar comprendida entre 268 a 278 km/hr.
● La altura debe estar comprendida entre 150 m a 300 m. */


let velocidad = 279;
let altura = 200;

let aterrizaje = ((velocidad >= 268 && velocidad <= 278)&&(altura>=150 && altura <= 300))?'el avion esta listo para iniciar el aterrisaje.':'el avion no esta listo para el aterrisaje';

console.log(aterrizaje);