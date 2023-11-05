function suma(numero1, numero2){
    return numero1+numero2;
}

// arrow

//let suma = (numero1, numero2) => numero1+numero2;

let esMultiplo = (a, b)=>{
    let resto = a % b ; //obtenemos el resto de la divicion
    return resto == 0; // si el resto es 0, es multiplo 
}

console.log(esMultiplo(8,4));



let tiempoActual=() => {
    let fecha = new Date();
    return fecha.getHours()+':'+fecha.getMinutes();
}
console.log(tiempoActual());