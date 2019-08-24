//  Inicio van importaciones
const express = require("express");
const request = require("request");
const rp = require("request-promise");

const port = 4201;
const indexHTML = `${__dirname}/index.html`

// La instancia del servidor hecho con express
const app = express();

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

// Esta línea va al final
app.listen(port, () => {
    console.log(`El servidor se encuentra corriendo en el puerto ${port}`);
});