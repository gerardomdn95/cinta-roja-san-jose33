//  Inicio van importaciones
const express = require("express");
const request = require("request");
const rp = require("request-promise");
const bodyParser = require("body-parser");

const port = 4201;
const indexHTML = `${__dirname}/index.html`

// La instancia del servidor hecho con express
const app = express();

// Configirar Body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Declarar rutas

// Raíz
app.get("/", (req, res) => {
    res.status(200).sendFile(indexHTML);
});

// Ruta hola
app.get("/string", (req, res) => {
    res.status(200).send("Hola");
});

app.get("/json", (req, res) => {
    res.status(200).send
        ({ 
            nombre: "Gerardo",
            sensei: "Cinta Roja",
            empresa: "Dev.f"
        });
});

// Params => Obligatorio
app.get("/pokemon/:name", (req, res) => {
    const pokemon = req.params.name;

    rp.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(data => {
            res.status(200).send(JSON.parse(data));
        })
        .catch(error => {
            res.status(error.statusCode).send(error);
        });
});

// Query => Opcional
app.get("/query/pokemon", (req, res) => {
    const pokemon = req.query.name;

    rp.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(data => {
            res.status(200).send(JSON.parse(data));
        })
        .catch(error => {
            res.status(error.statusCode).send(error);
        });
});

// JSON
app.post("/pokemon/create", (req, res) => {
    const pokemon = req.body;

    console.log(pokemon.name);
});


// GET v = d/t => Params (d, t)
// GET v = d/t => Query (v, d, t)
// POST (piedra, papel tijeras) {j1: "piedra", j2: "papel"}

// Esta línea va al final
app.listen(port, () => {
    console.log(`El servidor se encuentra corriendo en el puerto ${port}`);
});