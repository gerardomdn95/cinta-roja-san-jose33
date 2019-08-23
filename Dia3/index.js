// FETCH NO EXISTE EN EL NAVEGADOR
// const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
// console.log(pokemon);

const request = require("request");

// const operacion = (x, y, tipo) => {
//     return tipo(x, y);
// }

// const suma = (x, y) => {
//     return x + y;
// }

// const resta = (x, y) => {
//     return x - y;
// }

// console.log(operacion(5, 3, suma));
// console.log(operacion(5, 3, resta));


const getPokemon = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    request.get(url, callbackPokemon);
}

const callbackPokemon = (error, response, body) => {
    // console.log(error);
    // console.log(response.statusCode);
    if(response.statusCode === 200) {
        console.log("Petición correcta");
        const pokemon = JSON.parse(body);

        const name = pokemon.name;
        const type = pokemon.types[0].type.name;
        const id = pokemon.id;

        console.log(`
        Pokemon: ${name}
        Type: ${type}
        id: ${id}
        `)
    }
    // console.log(body);
}

getPokemon("pikachu");