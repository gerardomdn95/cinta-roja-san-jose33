let string = "Gerardo";
let bool = true;
let number = 15;
let paises = ["Costa Rica", "México", 5, true];

// Objeto literal
// let pokemon = {
//     nombre: "Pikachu",
//     tipo: "electric",
//     color: "amarillo",
//     edad: 5,
//     happy: true,
//     moves: ["thunderbolt", "takle"]
// }

// let bulbasaur = {
//     nombre: "Bulbasaur",
//     tipo: "grass",
//     color: "verde",
//     edad: 2,
//     happy: false,
//     moves: ["takle"]
// }

// let charmander = {
//     nombre: "Charmander",
//     tipo: "fire",
//     color: "naranja",
//     edad: 1,
//     happy: true,
//     moves: ["ember"]
// }

// console.log(pokemon.moves[0], bulbasaur.edad, charmander.edad);
// console.log(pokemon.moves[0], bulbasaur.edad, charmander.edad);

class pokemon {
    constructor(nombre, tipo, color, edad, happy, moves) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.color = color;
        this.edad = edad;
        this.happy = happy;
        this.moves = moves;
    }
}

let pikachu = new pokemon("Pikachu", "electric", "amarillo", 6, true, ["thunderbolt", "takle"]);
let charmander = new pokemon("Charmander", "fire", "rojo", 1, false, ["takle"]);

console.log(pikachu);
console.log(charmander);