// estructura basica de switch

/**el switch esta conpuesta por una exprecion a evaluar, seguida de diferentes casos
 * , tantos como queramos, cada uno contemplando un escenario diferente.
 * los casosdeberan terminar con la palabra reservada break para evitar
 * que se ejecute el proximo  bloque de codigo.
  */


/**  switch(expresion){
 * case valorA:
 *     break;
 * case valorB:
 *     break;
 * case valorC:
 *     break;
 * 
 * }
 * 
 
*/
let edad = 3;
switch(edad){
    case 10:
        console.log('usted tiene 10 años');
        break;
    case 5:
        console.log('usted tiene 5 años');
        break;
    default:
        console.log('numero equivocado')
}


let fruta = 'limon';
switch(fruta){
    case 'manzana':
        console.log('me gusta la manzana');
        break;
    case 'frutilla':
        console.log('me encanta la frutilla');
        break;
    case 'limon':
        console.log('no me gusta el limon');
         break;
    default:
        console.log('elija una fruta')
       
    
}