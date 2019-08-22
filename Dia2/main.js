// EcmaScript 6

// function suma(a, b) {
//     return a + b;
// }

// const resta = (a, b) => a - b;
// const cuadrado = x => x * x;

// const operacion = cuadrado(2);
// console.log(operacion);

// const nombre = (nombre, apellidoP, apellidoM) => {
//     // return nombre + " " + apellidoP + " " + apellidoM;
//     // String interpolation
//     return `Hola ${nombre} ${apellidoP} ${apellidoM}`;
// }

/* const resultado = nombre("Gerardo", "Medina", "Romero");
 console.log(resultado); */

const mayorDeEdad = (x) => {
    return x >= 18 
        ? (x <= 100 
            ? `${x} es una edad legal para beber.` 
            : (x <= 150 
                ? `Bro, puede que estés vivo` 
                : `Definitivamente no estás vivo`))
        : `${x} no es una edad legal para beber.`
    // if(x >= 18) {
    //     return `${x} es una edad legal para beber.`;
    // } else {
    //     return `${x} no es una edad legal para beber.`;
    // }
}

console.log(mayorDeEdad(102));