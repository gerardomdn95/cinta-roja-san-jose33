//                  0          1          2
// const array = ["México", "Costa Rica", "Panamá"];

// const objeto = [
//     {
//         name: "thunderbolt",
//         type: "electric"
//     },
//     {
//         name: "takle",
//         type: "normal"
//     }
// ] 

// const numeros = [10, 5, 9];

// // Forma imperativa
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// // Manera funcional
// // ES6
// array.forEach((data) => console.log(data));

// // Librería
// let suma = (a, b) => {
//     return a + b;
// }

// console.log(suma(1, 5));

// let nuevoArray = array.map((data, index) => `País ${index + 1}: ${data}`);
// let mayusculas = nuevoArray.map((data) => data.toUpperCase())

// let filtrar = array.filter((data) => data.length <= 6);
// let electric = objeto.filter((data) => data.type === "electric");

// let reducir = numeros.reduce((sum, element) => sum + element, 0);

// console.log(nuevoArray);
// console.log(mayusculas);
// console.log(filtrar);
// console.log(electric);
// console.log(reducir);

// let factorial = Math.sqrt(5);
// console.log(factorial);

// Funcional

// Composición de funciones
// function x() {
//     return 1;
// }

// function y(x) {
//     return x();
// }

// y(x);

// Inmutabilidad
// const pi = 3.14169;
// const e = 4.1272;

// let name = "Gerardo";
// let apellido = "Medina";

// Efectos secundarios

// let secundario = "LOREM";

// function obtenNombre(nombre) {
//     return nombre + secundario;
// }

// console.log(obtenNombre("Gerardo"));

// // Estados compartidos

// let pokemon = "pikachu";
// let info = {
//     type: "electric",
//     height: 25,
//     name: pokemon
// }

// console.log(info);