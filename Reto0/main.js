const request = require("request");
const rp = require("request-promise");
const { Pokemon } = require("./Pokemon");

let firstGeneration = []; 

for(i = 1; i <= 2; i++) {
    rp.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(data => {
            console.log(JSON.parse(data));
            let pokemon = new Pokemon(data.name, data.moves, data.types, data.height, data.weight);
            firstGeneration.push(pokemon);
        })
        .catch(error => {
            console.log(error);
        })
}

console.log(firstGeneration);