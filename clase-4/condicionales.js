//nos permite evaluar  condiciones y realizar diferentes acciones segun el resultado
//de esas evaluaciones.
//condicion simple.
//la vercion mas simple del if. establece una condicion y un bloque de codigo a 
//ejecutaren caso de que sea verdadero.

let valor = true ;
if(valor=true){
    console.log('hola mundo');
};

// condiciones con bloque else.

//igual al ejemplo anterior, pero agrega un bloque de codigo a ejecutar en caso de que 
// la condicion sea falsa.
//es importante tener en cuentaque el bloque "else "es opcional.

let dia= 'lunes';
let tiempo= 'soleado';
if (dia== 'lunes' && tiempo=='soleado'){
    console.log('lindo dia para salir');
}else{
    console.log('mejor me quedo en casa');
}
 // condicional con bloque else if.

 // igual al ejemplo anterior ,pero con un if else mas,es decir, con una condicion mas si la primera 
 //condicion es falsa, podemos agregar todos los bloque que sean necesarios de "if else" para que se cumpla 
 // la condicion que deseamos   

 if (dia == 'martes' && tiempo == 'soleado') { 
    console.log('tengo curso de pc');
 }else if (dia == 'lunes' && tiempo == 'soleado') {
    console.log('llevar a los chicos al taller de dibujo');
 }else{
    console.log('no hay nada ajendado');
 };

        