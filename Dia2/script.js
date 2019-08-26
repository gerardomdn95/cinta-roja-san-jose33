// GET

const pikachu = fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");

class Pokemon {
    constructor(name, id, height) {

    }
}

pikachu
    .then((pokemon) => {
        pokemon.json()
            .then((data) => {
                pokemon = new pokemon(data.name, data.id)
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    });