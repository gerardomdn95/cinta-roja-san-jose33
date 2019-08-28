const request = require("request");
const rp = require("request-promise");

let menorACinco = (name) => {
    rp(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then(data => {
            let pokemon = JSON.parse(data);
            let moves = [];
            moves = pokemon.moves.filter(data => data.move.name.length <= 5);
            return moves;
        })
        .catch(error => {
            return error;
        })
}

let resultado = menorACinco("pikachu");

setTimeout(() => { console.log(resultado); }, 5000)